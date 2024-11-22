package main

import (
	"context"
	"log"
	"path/filepath"

	flow "github.com/Azure/go-workflow"
)

func main() {
	// Create the main workflow
	mainWorkflow := new(flow.Workflow)

	// Define the steps
	readIntegrationDefinitionStep := &ReadIntegrationDefinitionStep{
		integrations: &[]Integration{},
	}

	// Initialize the shared clonedDirs slice
	clonedDirs := &[]string{}

	processIntegrationDescribersStep := &ProcessIntegrationDescribersStep{
		integrations: readIntegrationDefinitionStep.integrations,
		clonedDirs:   clonedDirs, // Pass the pointer to the shared slice
		outputFolder: "../../schemas",
	}

	// Define the master schema generation step
	generateMasterSchemaStep := &GenerateMasterSchemaStep{
		jsonDir:    "../../schemas",
		outputFile: filepath.Join("../../schemas", "schema.json"),
	}

	// Define the cleanup step, passing the shared clonedDirs
	cleanupClonedRepositoriesStep := &CleanupClonedRepositoriesStep{
		clonedDirs: clonedDirs, // Use the same pointer
	}

	// Add steps to the workflow with dependencies
	mainWorkflow.Add(
		flow.Step(readIntegrationDefinitionStep),
		flow.Step(processIntegrationDescribersStep).DependsOn(readIntegrationDefinitionStep),
		flow.Step(generateMasterSchemaStep).DependsOn(processIntegrationDescribersStep),
		flow.Step(cleanupClonedRepositoriesStep).DependsOn(generateMasterSchemaStep),
	)

	// Execute the workflow
	err := mainWorkflow.Do(context.Background())
	if err != nil {
		log.Fatalf("Workflow execution failed: %v", err)
	}
}
