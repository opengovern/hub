package main

import (
	"fmt"
	"go/ast"
	"go/token"
	"io/fs"
	"log"
	"path/filepath"
	"regexp"
	"strings"
)

// ------------------------------
// Helper Functions
// ------------------------------

// extractRepoName extracts the repository name from the given GitHub URL.
func extractRepoName(repoURL string) (string, error) {
	// Remove any trailing slash
	repoURL = strings.TrimSuffix(repoURL, "/")

	// Use regex to extract the repo name
	// This assumes URLs are in the format https://github.com/user/repo or https://github.com/user/repo.git
	match := repoNameRegex.FindStringSubmatch(repoURL)
	if len(match) < 2 {
		return "", fmt.Errorf("could not extract repository name from URL: %s", repoURL)
	}

	repoName := match[1]

	return repoName, nil
}

// tableDefFolderExists checks if specific folder patterns exist within the given directory.
func tableDefFolderExists(dir string, schemaIDs []string) bool {
	found := false

	// Iterate over each schema ID to construct patterns
	for _, schemaID := range schemaIDs {
		// Patterns to match:
		// 1. steampipe-plugin-{schemaID}/{schemaID}
		// 2. {schemaID}/
		pattern1 := fmt.Sprintf(`^steampipe-plugin-%s/%s$`, regexp.QuoteMeta(schemaID), regexp.QuoteMeta(schemaID))
		pattern2 := fmt.Sprintf(`^%s$`, regexp.QuoteMeta(schemaID)) // Removed trailing slash for consistency

		// Compile regex patterns
		regex1, err := regexp.Compile(pattern1)
		if err != nil {
			log.Printf("Error compiling regex1 for schemaID '%s': %v", schemaID, err)
			continue
		}
		regex2, err := regexp.Compile(pattern2)
		if err != nil {
			log.Printf("Error compiling regex2 for schemaID '%s': %v", schemaID, err)
			continue
		}

		// Walk the specified directory and check for matches
		err = filepath.Walk(dir, func(path string, info fs.FileInfo, err error) error {
			if err != nil {
				// Log the error and continue walking
				log.Printf("Error accessing path %q: %v\n", path, err)
				return nil
			}
			if info.IsDir() {
				// Get the relative path
				relPath, err := filepath.Rel(dir, path)
				if err != nil {
					return nil
				}
				// Normalize to use forward slashes
				relPath = filepath.ToSlash(relPath)
				// Match the patterns
				if regex1.MatchString(relPath) || regex2.MatchString(relPath) {
					found = true
					return filepath.SkipDir // Stop searching further
				}
			}
			return nil
		})

		if err != nil {
			log.Printf("Error walking the path %q: %v\n", dir, err)
			continue
		}

		if found {
			break // Stop if we've found a matching folder
		}
	}

	return found
}

// determineOperators returns the applicable operators for a column based on its type.
func determineOperators(columnType string) string {
	ops, ok := operatorMapping[columnType]
	if !ok {
		return ""
	}

	// Map operators to their abbreviations.
	var opAbbrevs []string
	for _, op := range ops {
		if abbrev, ok := operatorAbbreviations[op]; ok {
			opAbbrevs = append(opAbbrevs, abbrev)
		}
	}

	return strings.Join(opAbbrevs, ", ")
}

// extractString extracts string value from an expression.
func extractString(expr ast.Expr) string {
	switch v := expr.(type) {
	case *ast.BasicLit:
		if v.Kind == token.STRING {
			return strings.Trim(v.Value, `"`)
		}
	case *ast.Ident:
		return v.Name
	}
	return ""
}

// extractTypeString extracts the type as a string from an expression.
func extractTypeString(expr ast.Expr) string {
	switch e := expr.(type) {
	case *ast.SelectorExpr:
		// Handle types like 'proto.ColumnType_STRING'
		if xIdent, ok := e.X.(*ast.Ident); ok {
			return xIdent.Name + "_" + e.Sel.Name
		}
	case *ast.Ident:
		// Handle types like 'text', 'jsonb', etc.
		return e.Name
	default:
		return fmt.Sprintf("%v", e)
	}
	return ""
}

// mapToPostgresType maps the extracted type to an acceptable PostgreSQL data type.
func mapToPostgresType(expr ast.Expr) string {
	goType := extractTypeString(expr)

	// Map the ColumnType_* constants to data types.
	var baseType string
	if strings.HasPrefix(goType, "proto_ColumnType_") {
		// Handle 'proto.ColumnType_STRING' etc.
		baseType = columnTypeMapping[strings.TrimPrefix(goType, "proto_")]
	} else if strings.HasPrefix(goType, "ColumnType_") {
		baseType = columnTypeMapping[goType]
	} else {
		baseType = goType
	}

	// Check if the baseType is in the list of acceptable PostgreSQL data types.
	if _, ok := postgresDataTypes[baseType]; ok {
		return baseType
	}

	// If not found, default to 'text'.
	return "text"
}
