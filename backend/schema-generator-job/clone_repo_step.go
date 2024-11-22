package main

import (
	"context"
	"fmt"
	"log"
	"os"

	git "github.com/go-git/go-git/v5"
)

// CloneRepoStep clones a repository using go-git.
type CloneRepoStep struct {
	repoURL  string
	destPath string
}

// Do performs the step of cloning the repository.
func (s *CloneRepoStep) Do(ctx context.Context) error {
	// Check if the repository is already cloned
	if _, err := os.Stat(s.destPath); os.IsNotExist(err) {
		log.Printf("Cloning repository '%s' into '%s'...", s.repoURL, s.destPath)

		// Clone the repository using go-git
		_, err := git.PlainClone(s.destPath, false, &git.CloneOptions{
			URL:      s.repoURL,
			Progress: os.Stdout,
		})
		if err != nil {
			return fmt.Errorf("error cloning repository '%s': %v", s.repoURL, err)
		}
		log.Printf("Successfully cloned '%s'.", s.repoURL)
	} else {
		log.Printf("Repository '%s' already exists at '%s'. Skipping clone.", s.repoURL, s.destPath)
	}

	return nil
}
