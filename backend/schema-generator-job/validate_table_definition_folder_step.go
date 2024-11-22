package main

import (
	"context"
	"fmt"
	"log"

	flow "github.com/Azure/go-workflow"
)

// ValidateTableDefinitionFolderStep checks if the required folder exists in the cloned repository.
type ValidateTableDefinitionFolderStep struct {
	destPath  string
	schemaIDs []string
}

// Do performs the step of checking the folder's existence.
func (s *ValidateTableDefinitionFolderStep) Do(ctx context.Context) error {
	exists := tableDefFolderExists(s.destPath, s.schemaIDs)
	if exists {
		log.Printf("Required folder exists in '%s'.", s.destPath)
		return nil // Success
	} else {
		log.Printf("Required folder does NOT exist in '%s'.", s.destPath)
		return flow.Skip(fmt.Errorf("required folder does not exist in '%s'", s.destPath))
	}
}
