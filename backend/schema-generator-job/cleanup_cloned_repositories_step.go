package main

import (
	"context"
	"log"
	"os"
)

// CleanupClonedRepositoriesStep deletes the cloned repositories after processing.
type CleanupClonedRepositoriesStep struct {
	clonedDirs *[]string // Pointer to the shared clonedDirs slice
}

// Do performs the cleanup of cloned repositories.
func (s *CleanupClonedRepositoriesStep) Do(ctx context.Context) error {
	for _, dir := range *s.clonedDirs {
		log.Printf("Deleting cloned repository at '%s'...", dir)
		err := os.RemoveAll(dir)
		if err != nil {
			log.Printf("Error deleting directory '%s': %v", dir, err)
			// Continue deleting other directories even if one fails
			continue
		}
		log.Printf("Successfully deleted '%s'.", dir)
	}
	return nil
}
