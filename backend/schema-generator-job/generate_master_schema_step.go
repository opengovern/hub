package main

import (
	"context"
	"fmt"
	"log"
)

// GenerateMasterSchemaStep generates the master schema after all repositories are processed.
type GenerateMasterSchemaStep struct {
	jsonDir    string // Directory where provider JSONs are stored, e.g., "json"
	outputFile string // Output master schema file, e.g., "json/schema.json"
}

// Do performs the step of generating the master schema.
func (s *GenerateMasterSchemaStep) Do(ctx context.Context) error {
	log.Printf("Generating master schema from '%s'...", s.jsonDir)
	err := GenerateMasterSchema(s.jsonDir, s.outputFile)
	if err != nil {
		return fmt.Errorf("error generating master schema: %v", err)
	}
	log.Printf("Successfully generated master schema at '%s'.", s.outputFile)
	return nil
}
