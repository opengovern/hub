package main

import (
	"context"
	"fmt"
	"log"
)

// GenerateTableSchemaStep generates table schemas if the required folder exists.
type GenerateTableSchemaStep struct {
	inputPath string
	outputDir string
}

// Do performs the step of generating table schemas.
func (s *GenerateTableSchemaStep) Do(ctx context.Context) error {
	log.Printf("Generating table schema in '%s'...", s.inputPath)
	err := GenerateTableSchema(s.inputPath, s.outputDir)
	if err != nil {
		return fmt.Errorf("error generating table schema in '%s': %v", s.inputPath, err)
	}
	log.Printf("Successfully generated table schema in '%s'.", s.outputDir)
	return nil
}
