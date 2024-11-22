package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"sync"

	_ "github.com/lib/pq"
)

// LoadToPostgresStep loads the generated JSON schemas into PostgreSQL.
type LoadToPostgresStep struct {
	jsonDir string
	cfg     *Config
}

// Do performs the loading of JSON files into PostgreSQL.
func (s *LoadToPostgresStep) Do(ctx context.Context) error {
	log.Println("Starting LoadToPostgresStep...")

	// Load configuration
	cfg, err := LoadConfig()
	if err != nil {
		return fmt.Errorf("failed to load config: %v", err)
	}
	s.cfg = cfg

	// Debugging: Log the configuration
	log.Printf("Loaded configuration: %+v", cfg)

	dbCfg := cfg.Database

	log.Printf("Database configuration: Host=%s Port=%s User=%s DBName=%s SSLMode=%s",
		dbCfg.Host, dbCfg.Port, dbCfg.User, dbCfg.DBName, dbCfg.SSLMode)

	// Build the connection string
	dbConnStr := fmt.Sprintf(
		"host=%s port=%s user=%s dbname=%s sslmode=%s",
		dbCfg.Host, dbCfg.Port, dbCfg.User, dbCfg.DBName, dbCfg.SSLMode)

	if dbCfg.Password != "" {
		dbConnStr += fmt.Sprintf(" password=%s", dbCfg.Password)
	}

	log.Printf("Database connection string: %s", dbConnStr)

	// Connect to the PostgreSQL database
	db, err := sql.Open("postgres", dbConnStr)
	if err != nil {
		return fmt.Errorf("failed to connect to the database: %v", err)
	}
	defer db.Close()

	// Ensure the database connection is alive
	if err := db.Ping(); err != nil {
		return fmt.Errorf("database connection error: %v", err)
	}

	// Rest of the code remains the same...

	// Get the list of JSON files
	jsonFiles, err := s.getJSONFiles()
	if err != nil {
		return fmt.Errorf("failed to get JSON files: %v", err)
	}

	// Use a WaitGroup and a semaphore for concurrent processing
	var wg sync.WaitGroup
	sem := make(chan struct{}, cfg.WorkerCount)

	for _, file := range jsonFiles {
		wg.Add(1)
		sem <- struct{}{}

		go func(f string) {
			defer wg.Done()
			defer func() { <-sem }()

			if err := s.processFile(db, f); err != nil {
				log.Printf("Error processing file '%s': %v", f, err)
			}
		}(file)
	}

	wg.Wait()
	log.Println("LoadToPostgresStep completed successfully.")
	return nil
}

// getJSONFiles retrieves all JSON files from the jsonDir
func (s *LoadToPostgresStep) getJSONFiles() ([]string, error) {
	var files []string
	err := filepath.Walk(s.jsonDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if !info.IsDir() && filepath.Ext(info.Name()) == ".json" && info.Name() != "schema.json" {
			files = append(files, path)
		}
		return nil
	})
	return files, err
}

// processFile processes a single JSON file and inserts data into the database
func (s *LoadToPostgresStep) processFile(db *sql.DB, filePath string) error {
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		return fmt.Errorf("failed to read file '%s': %v", filePath, err)
	}

	var table Table
	if err := json.Unmarshal(data, &table); err != nil {
		return fmt.Errorf("failed to unmarshal JSON from '%s': %v", filePath, err)
	}

	// Insert the table data
	tableID, err := s.insertTable(db, &table)
	if err != nil {
		return fmt.Errorf("failed to insert table '%s': %v", table.TableName, err)
	}

	// Insert columns data
	for _, column := range table.Columns {
		if err := s.insertColumn(db, tableID, &column); err != nil {
			log.Printf("Failed to insert column '%s' for table '%s': %v", column.Name, table.TableName, err)
			continue
		}
	}

	return nil
}

// insertTable inserts a table record into the database
func (s *LoadToPostgresStep) insertTable(db *sql.DB, table *Table) (int, error) {
	var tableID int
	err := db.QueryRow(
		`INSERT INTO public.tables (table_name, table_description) 
         VALUES ($1, $2) ON CONFLICT (table_name) DO UPDATE 
         SET table_description = EXCLUDED.table_description 
         RETURNING id`,
		table.TableName, table.TableDescription).Scan(&tableID)
	if err != nil {
		return 0, err
	}
	return tableID, nil
}

// insertColumn inserts a column record into the database
func (s *LoadToPostgresStep) insertColumn(db *sql.DB, tableID int, column *Column) error {
	_, err := db.Exec(
		`INSERT INTO public.columns (table_id, name, type, description)
         VALUES ($1, $2, $3, $4) ON CONFLICT (table_id, name) DO UPDATE 
         SET type = EXCLUDED.type, description = EXCLUDED.description`,
		tableID, column.Name, column.Type, column.Description)
	return err
}
