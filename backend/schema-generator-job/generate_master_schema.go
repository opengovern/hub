package main

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strings"
)

// GenerateMasterSchema generates the master schema from all provider JSON files.
func GenerateMasterSchema(jsonDir string, outputFile string,integrations *[]Integration) error {
	// Initialize the output structure
	output := OutputStructure{
		Total:   TotalInfo{Integration: 0, CountOfNamedTables: 0, CountOfNamedColumns: 0},
		Summary: make(map[string]SummaryInfo),
		Details: make(map[string][]TableInfo),
	}

	// Walk through all provider directories and process JSON files
	err := filepath.WalkDir(jsonDir, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			log.Printf("Error accessing path '%s': %v\n", path, err)
			return nil // Skip this file/dir and continue
		}

		if d.IsDir() {
			return nil // Skip directories
		}

		if strings.ToLower(filepath.Ext(d.Name())) != ".json" || filepath.Base(path) == filepath.Base(outputFile) {
			return nil // Skip non-JSON files and the master schema itself
		}

		// Read and process the JSON file
		data, err := os.ReadFile(path)
		if err != nil {
			log.Printf("Error reading file '%s': %v\n", path, err)
			return nil // Skip this file and continue
		}

		var tableFile TableFile
		err = json.Unmarshal(data, &tableFile)
		if err != nil {
			log.Printf("Error parsing JSON in file '%s': %v\n", path, err)
			return nil // Skip this file and continue
		}

		// Extract group name from table_name (substring before first underscore)
		tableName := tableFile.TableName
		if tableName == "" {
			log.Printf("Warning: 'table_name' is empty in file '%s'. Skipping.\n", path)
			return nil // Skip this file and continue
		}
		groupName := strings.SplitN(tableName, "_", 2)[0]

		// Create TableInfo instance
		tableInfo := TableInfo{
			TableName:      tableName,
			Description:    tableFile.TableDescription,
			CountOfColumns: len(tableFile.Columns),
		}

		// Append to Details
		output.Details[groupName] = append(output.Details[groupName], tableInfo)

		// Update Summary
		summaryInfo, exists := output.Summary[groupName]
		if !exists {
			summaryInfo = SummaryInfo{
				CountOfNamedTables:  0,
				CountOfNamedColumns: 0,
			}
		}
		summaryInfo.CountOfNamedTables++
		summaryInfo.CountOfNamedColumns += tableInfo.CountOfColumns
		output.Summary[groupName] = summaryInfo

		// Update Total counts
		output.Total.CountOfNamedTables++
		output.Total.CountOfNamedColumns += tableInfo.CountOfColumns

		return nil
	})

	if err != nil {
		return fmt.Errorf("error walking the directory tree: %v", err)
	}

	// Calculate the number of unique integrations (groups)
	output.Total.Integration = len(output.Summary)
	
	// Generate a separate output structure for each integration (group)
	var separateOutput SeperateOutputStructure
	for groupName, tableInfos := range output.Summary {
		separateOutput.CountOfNamedTables = tableInfos.CountOfNamedTables
		separateOutput.CountOfNamedColumns = tableInfos.CountOfNamedColumns
		separateOutput.Tables = output.Details[groupName]
		// find the integration in integrations
		for _, integration := range *integrations {
			if integration.ID == 0 {
				continue
			}
			// fmt.Println(integration.Name)
			// fmt.Println(groupName)
			// fmt.Println(strings.Contains(integration.Name,groupName))


			if strings.Contains(strings.ToLower((integration.Name)),groupName) {
				
				separateOutput.Description = integration.Description
				break
			}
		}
		// Marshal the output structure into JSON with indentation
		outputData, err := json.MarshalIndent(separateOutput, "", "  ")
		if err != nil {
			return fmt.Errorf("error marshalling result to JSON: %v", err)
		}
		// Write the output JSON to a file
		file_path := filepath.Join(jsonDir, groupName+".json")
		err = os.WriteFile(file_path, outputData, 0644)
		if err != nil {
			return fmt.Errorf("error writing output to '%s': %v", outputFile, err)
		}
	}


	// Marshal the output structure into JSON with indentation
	outputData, err := json.MarshalIndent(output, "", "  ")
	if err != nil {
		return fmt.Errorf("error marshalling result to JSON: %v", err)
	}

	// Write the output JSON to a file
	err = os.WriteFile(outputFile, outputData, 0644)
	if err != nil {
		return fmt.Errorf("error writing output to '%s': %v", outputFile, err)
	}

	fmt.Printf("Schema with summary has been written to '%s'\n", outputFile)
	return nil
}
