package main

import (
	"context"
	"fmt"
	"log"
	"path/filepath"

	flow "github.com/Azure/go-workflow"
)

// ProcessIntegrationDescribersStep processes each repository based on integrations.
type ProcessIntegrationDescribersStep struct {
	integrations *[]Integration
	clonedDirs   *[]string // Pointer to the shared clonedDirs slice
	outputFolder string

	
}

// Do performs the step of processing repositories.
func (s *ProcessIntegrationDescribersStep) Do(ctx context.Context) error {
	workflow := new(flow.Workflow)

	// Filter integrations with ID > 0 and non-empty SourceCode
	for _, integration := range *s.integrations {
		if integration.ID > 0 && integration.SourceCode != "" {
			repoURL := integration.SourceCode
			repoName, err := extractRepoName(repoURL)
			if err != nil {
				log.Printf("Skipping invalid repo URL '%s': %v", repoURL, err)
				continue
			}

			destPath := repoName // Clone directly into current directory

			// Add destPath to the list of cloned directories
			*s.clonedDirs = append(*s.clonedDirs, destPath)

			// Determine the provider name (schema ID)
			providerName := "unknown"
			if len(integration.SchemaIDs) > 0 {
				providerName = integration.SchemaIDs[0]
			}

			// Create steps for cloning and validating the repository
			cloneRepoStep := &CloneRepoStep{
				repoURL:  repoURL,
				destPath: destPath,
			}

			validateTableDefinitionFolderStep := &ValidateTableDefinitionFolderStep{
				destPath:  destPath,
				schemaIDs: integration.SchemaIDs, // Pass the schema IDs
			}

			// Output directory: json/<provider_name> in current working directory
			outputDir := filepath.Join(s.outputFolder, providerName)

			generateSchemaStep := &GenerateTableSchemaStep{
				inputPath: destPath,
				outputDir: outputDir,
			}

			// Add steps to the sub-workflow
			workflow.Add(
				flow.Step(cloneRepoStep),
				flow.Step(validateTableDefinitionFolderStep).DependsOn(cloneRepoStep),
				flow.Step(generateSchemaStep).DependsOn(validateTableDefinitionFolderStep).When(flow.AllSucceeded),
			)
		}
	}

	// Execute the sub-workflow
	if err := workflow.Do(ctx); err != nil {
		return fmt.Errorf("error processing repositories: %v", err)
	}

	return nil
}
