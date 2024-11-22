package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// ------------------------------
// Workflow Steps Definitions
// ------------------------------

// ReadIntegrationDefinitionStep downloads and parses the integrations JSON from a URL.
type ReadIntegrationDefinitionStep struct {
	integrations *[]Integration
}

// Do performs the step of downloading and parsing the JSON.
func (s *ReadIntegrationDefinitionStep) Do(ctx context.Context) error {
	log.Printf("Downloading integrations JSON from: %s", INTEGRATION_FILE)
	resp, err := http.Get(INTEGRATION_FILE)
	if err != nil {
		return fmt.Errorf("error downloading JSON file from '%s': %v", INTEGRATION_FILE, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("received non-200 response code '%d' from '%s'", resp.StatusCode, INTEGRATION_FILE)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("error reading response body from '%s': %v", INTEGRATION_FILE, err)
	}

	err = json.Unmarshal(body, s.integrations)
	if err != nil {
		return fmt.Errorf("error unmarshalling JSON from '%s': %v", INTEGRATION_FILE, err)
	}

	log.Printf("Successfully downloaded and parsed integrations JSON.")
	return nil
}
