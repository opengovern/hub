package main

import (
	"encoding/json"
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"io/fs"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"sync"
)

// GenerateTableSchema generates table schemas from Go source files.
func GenerateTableSchema(inputPath string, outputDir string) error {
	// Check if inputPath is a file or directory.
	fileInfo, err := os.Stat(inputPath)
	if err != nil {
		return fmt.Errorf("error accessing input path '%s': %v", inputPath, err)
	}

	var tables []TableFile

	if fileInfo.IsDir() {
		// Recursively find all 'table_*.go' files.
		tableFiles, err := findTableFiles(inputPath)
		if err != nil {
			return fmt.Errorf("error searching for table_*.go files in '%s': %v", inputPath, err)
		}

		if len(tableFiles) == 0 {
			return fmt.Errorf("no table_*.go files found in the directory and its subdirectories")
		}

		// Process files in batches of 10.
		batchSize := 10
		for i := 0; i < len(tableFiles); i += batchSize {
			end := i + batchSize
			if end > len(tableFiles) {
				end = len(tableFiles)
			}
			batch := tableFiles[i:end]
			batchTables, err := processFilesBatch(batch)
			if err != nil {
				fmt.Printf("Error processing files batch: %v\n", err)
				continue
			}
			tables = append(tables, batchTables...)
		}
	} else {
		// Process a single file.
		ts, err := processFile(inputPath)
		if err != nil {
			return fmt.Errorf("error processing file '%s': %v", inputPath, err)
		}
		tables = append(tables, ts...)
	}

	if len(tables) == 0 {
		return fmt.Errorf("no tables found")
	}

	// Ensure the output directory exists
	err = os.MkdirAll(outputDir, os.ModePerm)
	if err != nil {
		return fmt.Errorf("error creating output directory '%s': %v", outputDir, err)
	}

	// Write each table to its respective JSON file in the output directory
	for _, table := range tables {
		outputPath := filepath.Join(outputDir, table.TableName+".json")
		output, err := json.MarshalIndent(table, "", "  ")
		if err != nil {
			fmt.Printf("Error marshaling JSON for table '%s': %v\n", table.TableName, err)
			continue
		}
		err = ioutil.WriteFile(outputPath, output, 0644)
		if err != nil {
			fmt.Printf("Error writing JSON file for table '%s': %v\n", table.TableName, err)
			continue
		}
	}

	return nil
}

// findTableFiles recursively searches for 'table_*.go' files in the given directory.
func findTableFiles(root string) ([]string, error) {
	var tableFiles []string
	err := filepath.WalkDir(root, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && strings.HasPrefix(d.Name(), "table_") && strings.HasSuffix(d.Name(), ".go") {
			tableFiles = append(tableFiles, path)
		}
		return nil
	})
	return tableFiles, err
}

// processFilesBatch processes a batch of files concurrently.
// It returns all extracted tables from the batch.
func processFilesBatch(filePaths []string) ([]TableFile, error) {
	var tables []TableFile
	var mutex sync.Mutex
	var wg sync.WaitGroup

	for _, filePath := range filePaths {
		wg.Add(1)
		go func(path string) {
			defer wg.Done()
			ts, err := processFile(path)
			if err != nil {
				fmt.Println("Error processing file:", path, err)
				return
			}
			mutex.Lock()
			tables = append(tables, ts...)
			mutex.Unlock()
		}(filePath)
	}

	wg.Wait()
	return tables, nil
}

// processFile processes a single Go source file and extracts tables.
// It returns a slice of extracted tables from the file.
func processFile(filePath string) ([]TableFile, error) {
	fset := token.NewFileSet()
	node, err := parser.ParseFile(fset, filePath, nil, parser.ParseComments)
	if err != nil {
		return nil, fmt.Errorf("error parsing file: %w", err)
	}

	var tables []TableFile

	// Collect all function definitions.
	functionDefs := make(map[string]*ast.FuncDecl)
	for _, decl := range node.Decls {
		if fn, ok := decl.(*ast.FuncDecl); ok {
			functionDefs[fn.Name.Name] = fn
		}
	}

	// Find all functions whose names start with 'Table' or 'table' and return type is '*plugin.Table'.
	for _, fn := range functionDefs {
		if (strings.HasPrefix(fn.Name.Name, "Table") || strings.HasPrefix(fn.Name.Name, "table")) && isReturningPluginTable(fn) {
			// Extract key columns from ListConfig.KeyColumns if present.
			keyColumns := extractKeyColumns(fn)

			// Extract the table name, description, and columns from the function.
			table := extractTable(fn, keyColumns, functionDefs, map[string]bool{})
			if table != nil {
				tables = append(tables, *table)
			}
		}
	}

	return tables, nil
}

// isReturningPluginTable checks if the function returns *plugin.Table.
func isReturningPluginTable(fn *ast.FuncDecl) bool {
	if fn.Type.Results == nil || len(fn.Type.Results.List) == 0 {
		return false
	}
	for _, result := range fn.Type.Results.List {
		expr := result.Type
		if starExpr, ok := expr.(*ast.StarExpr); ok {
			if selExpr, ok := starExpr.X.(*ast.SelectorExpr); ok {
				if selExpr.Sel.Name == "Table" {
					if ident, ok := selExpr.X.(*ast.Ident); ok {
						if ident.Name == "plugin" {
							return true
						}
					}
				}
			}
		}
	}
	return false
}

// extractKeyColumns extracts the names of key columns from the ListConfig.
func extractKeyColumns(fn *ast.FuncDecl) map[string]string {
	keyColumns := make(map[string]string)

	// Walk through the function body to find the return statement.
	ast.Inspect(fn, func(n ast.Node) bool {
		retStmt, ok := n.(*ast.ReturnStmt)
		if !ok {
			return true
		}
		if len(retStmt.Results) == 0 {
			return true
		}

		// The return expression should be '&plugin.Table{...}' or 'plugin.Table{...}'.
		var compositeLit *ast.CompositeLit

		switch expr := retStmt.Results[0].(type) {
		case *ast.UnaryExpr:
			// Handle &plugin.Table{...}
			if expr.Op != token.AND {
				return true
			}
			if lit, ok := expr.X.(*ast.CompositeLit); ok {
				compositeLit = lit
			}
		case *ast.CompositeLit:
			// Handle plugin.Table{...}
			compositeLit = expr
		default:
			return true
		}

		if compositeLit == nil {
			return true
		}

		// Find the 'List' field inside the table literal.
		for _, elt := range compositeLit.Elts {
			kv, ok := elt.(*ast.KeyValueExpr)
			if !ok {
				continue
			}
			keyIdent, ok := kv.Key.(*ast.Ident)
			if !ok || keyIdent.Name != "List" {
				continue
			}

			// Extract KeyColumns from ListConfig.
			if listConfig, ok := kv.Value.(*ast.CompositeLit); ok {
				for _, listElt := range listConfig.Elts {
					listKv, ok := listElt.(*ast.KeyValueExpr)
					if !ok {
						continue
					}
					listKeyIdent, ok := listKv.Key.(*ast.Ident)
					if !ok {
						continue
					}
					if listKeyIdent.Name == "KeyColumns" {
						keyColumns = parseKeyColumns(listKv.Value)
						break
					}
				}
			}
			break
		}
		return false
	})

	return keyColumns
}

// parseKeyColumns parses the KeyColumns to extract column names.
func parseKeyColumns(expr ast.Expr) map[string]string {
	keyColumns := make(map[string]string)

	// Handle plugin.KeyColumnSlice{...}
	if compLit, ok := expr.(*ast.CompositeLit); ok {
		for _, elt := range compLit.Elts {
			if compLit2, ok := elt.(*ast.CompositeLit); ok {
				var name string
				for _, elt2 := range compLit2.Elts {
					kv, ok := elt2.(*ast.KeyValueExpr)
					if !ok {
						continue
					}
					keyIdent, ok := kv.Key.(*ast.Ident)
					if !ok {
						continue
					}
					if keyIdent.Name == "Name" {
						name = extractString(kv.Value)
					}
				}
				if name != "" {
					keyColumns[name] = ""
				}
			}
		}
	}

	return keyColumns
}

// extractTable extracts the table name, description, and columns from the function.
func extractTable(fn *ast.FuncDecl, keyColumns map[string]string, functionDefs map[string]*ast.FuncDecl, visited map[string]bool) *TableFile {
	var tableName string
	var tableDescription string
	var columns []Column

	// Prevent infinite recursion.
	if visited[fn.Name.Name] {
		return nil
	}
	visited[fn.Name.Name] = true

	// Walk through the function body to find the return statement.
	ast.Inspect(fn, func(n ast.Node) bool {
		retStmt, ok := n.(*ast.ReturnStmt)
		if !ok {
			return true
		}
		for _, result := range retStmt.Results {
			// The result should be a composite literal representing &plugin.Table{...}
			var tableCompositeLit *ast.CompositeLit

			switch expr := result.(type) {
			case *ast.UnaryExpr:
				// Handle &plugin.Table{...}
				if expr.Op != token.AND {
					return true
				}
				if lit, ok := expr.X.(*ast.CompositeLit); ok {
					tableCompositeLit = lit
				}
			case *ast.CompositeLit:
				// Handle plugin.Table{...}
				tableCompositeLit = expr
			default:
				return true
			}

			if tableCompositeLit != nil {
				// Find the 'Name', 'Description', and 'Columns' fields inside the table literal.
				hasName := false
				hasColumns := false
				for _, elt := range tableCompositeLit.Elts {
					kv, ok := elt.(*ast.KeyValueExpr)
					if !ok {
						continue
					}
					keyIdent, ok := kv.Key.(*ast.Ident)
					if !ok {
						continue
					}
					switch keyIdent.Name {
					case "Name":
						tableName = extractString(kv.Value)
						hasName = true
					case "Description":
						tableDescription = extractString(kv.Value)
					case "Columns":
						// Now parse the columns
						columns = append(columns, parseColumns(kv.Value, keyColumns, functionDefs, visited)...)
						hasColumns = true
					}
				}
				// Ensure that both 'Name' and 'Columns' fields are present
				if hasName && hasColumns {
					// Found a valid table definition
					return false // Stop inspecting further
				} else {
					// Not a valid table definition
					return true
				}
			}
		}
		return false
	})

	if tableName == "" || len(columns) == 0 {
		return nil
	}

	return &TableFile{
		TableName:        tableName,
		TableDescription: tableDescription,
		Columns:          columns,
	}
}

// parseColumns parses the columns from the 'Columns' field.
func parseColumns(expr ast.Expr, keyColumns map[string]string, functionDefs map[string]*ast.FuncDecl, visited map[string]bool) []Column {
	var columns []Column

	switch e := expr.(type) {
	case *ast.CallExpr:
		// Handle function calls by processing their arguments.
		for _, arg := range e.Args {
			columns = append(columns, parseColumns(arg, keyColumns, functionDefs, visited)...)
		}

		// Additionally, if the function is defined, extract columns from it.
		funcName := getFunctionName(e.Fun)
		if funcDef, ok := functionDefs[funcName]; ok {
			columns = append(columns, extractColumnsFromFunction(funcDef, keyColumns, functionDefs, visited)...)
		}

	case *ast.CompositeLit:
		// The expression should be a composite literal (slice of columns).
		for _, elt := range e.Elts {
			// Each element should be '&plugin.Column{...}' or 'plugin.Column{...}'.
			var columnLit *ast.CompositeLit
			switch expr := elt.(type) {
			case *ast.UnaryExpr:
				// Handle &plugin.Column{...}
				if expr.Op != token.AND {
					continue
				}
				if lit, ok := expr.X.(*ast.CompositeLit); ok {
					columnLit = lit
				}
			case *ast.CompositeLit:
				// Handle plugin.Column{...}
				columnLit = expr
			default:
				// Handle nested function calls or other expressions.
				columns = append(columns, parseColumns(expr, keyColumns, functionDefs, visited)...)
				continue
			}

			if columnLit == nil {
				continue
			}

			column := Column{}
			for _, field := range columnLit.Elts {
				kv, ok := field.(*ast.KeyValueExpr)
				if !ok {
					continue
				}
				keyIdent, ok := kv.Key.(*ast.Ident)
				if !ok {
					continue
				}
				switch keyIdent.Name {
				case "Name":
					column.Name = extractString(kv.Value)
				case "Description":
					column.Description = extractString(kv.Value)
				case "Type":
					column.Type = mapToPostgresType(kv.Value)
				}
			}

			// Skip columns containing "sp_", "ctx", or "akas" in the name.
			if strings.Contains(column.Name, "sp_") || strings.Contains(column.Name, "ctx") || strings.Contains(column.Name, "akas") {
				continue
			}

			// Determine Operators based on whether the column is a key column and its type.
			if _, ok := keyColumns[column.Name]; ok {
				column.Operators = determineOperators(column.Type)
			}

			columns = append(columns, column)
		}
	default:
		// Handle other expression types if necessary
	}

	return columns
}

// extractColumnsFromFunction extracts columns from a function that returns columns.
func extractColumnsFromFunction(fn *ast.FuncDecl, keyColumns map[string]string, functionDefs map[string]*ast.FuncDecl, visited map[string]bool) []Column {
	var columns []Column

	// Prevent infinite recursion.
	if visited[fn.Name.Name] {
		return columns
	}
	visited[fn.Name.Name] = true

	// Walk through the function body to find the return statement.
	ast.Inspect(fn, func(n ast.Node) bool {
		retStmt, ok := n.(*ast.ReturnStmt)
		if !ok {
			return true
		}
		for _, result := range retStmt.Results {
			columns = append(columns, parseColumns(result, keyColumns, functionDefs, visited)...)
		}
		return false
	})

	return columns
}

// getFunctionName extracts the function name from an expression.
func getFunctionName(expr ast.Expr) string {
	switch fun := expr.(type) {
	case *ast.Ident:
		return fun.Name
	case *ast.SelectorExpr:
		if xIdent, ok := fun.X.(*ast.Ident); ok {
			return xIdent.Name + "." + fun.Sel.Name
		}
		return fun.Sel.Name
	default:
		return ""
	}
}
