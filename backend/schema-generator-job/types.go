package main

// ------------------------------
// Struct Definitions
// ------------------------------

// Integration represents each entry in the JSON file.
type Integration struct {
	ID              int    `json:"id"`
	IntegrationType string `json:"integration_type"`
	Name            string `json:"name"`
	Tier            string `json:"tier"`
	Tags            struct {
		Usage []string `json:"usage"`
	} `json:"tags"`
	Description  string   `json:"Description"`
	Icon         string   `json:"Icon"`
	Availability string   `json:"Availability"`
	SourceCode   string   `json:"SourceCode"`
	SchemaIDs    []string `json:"schema_ids"`
}

// Column represents the extracted column information.
type Column struct {
	Name        string `json:"name"`
	Type        string `json:"type"`
	Operators   string `json:"operators,omitempty"`
	Description string `json:"description"`
}

// Table represents the structure of each JSON file.
type Table struct {
	TableName        string   `json:"table_name"`
	TableDescription string   `json:"table_description"`
	Columns          []Column `json:"columns"`
}

// TableFile represents the structure of each JSON file.
// This is used in various parts of the codebase.
type TableFile struct {
	TableName        string   `json:"table_name"`
	TableDescription string   `json:"table_description"`
	Columns          []Column `json:"columns"`
}

// TableInfo represents the extracted information for each table.
type TableInfo struct {
	TableName      string `json:"table_name"`
	Description    string `json:"description"`
	CountOfColumns int    `json:"count_of_columns"`
}

// SummaryInfo represents the summary details for each group.
type SummaryInfo struct {
	CountOfNamedTables  int `json:"count_of_named_tables"`
	CountOfNamedColumns int `json:"count_of_named_columns"`
}

// TotalInfo represents the overall counts across all groups.
type TotalInfo struct {
	Integration         int `json:"integration"`
	CountOfNamedTables  int `json:"count_of_named_tables"`
	CountOfNamedColumns int `json:"count_of_named_columns"`
}

// OutputStructure defines the structure of the final JSON output.
type OutputStructure struct {
	Total   TotalInfo              `json:"total"`
	Summary map[string]SummaryInfo `json:"summary"`
	Details map[string][]TableInfo `json:"details"`
}

type SeperateOutputStructure struct{
	CountOfNamedTables int 	`json:"count_of_named_tables"`
	CountOfNamedColumns int 	`json:"count_of_named_columns"`
	Tables []TableInfo 		`json:"tables"`
}