package main

import "regexp"

// ------------------------------
// Constants and Global Mappings
// ------------------------------

// INTEGRATION_FILE is the URL to the integrations JSON file.
const INTEGRATION_FILE = "https://raw.githubusercontent.com/opengovern/opengovernance/refs/heads/main/assets/integrations/integrations.json"

// Mapping from ColumnType_* constants to PostgreSQL data types.
var columnTypeMapping = map[string]string{
	"ColumnType_BOOL":      "boolean",
	"ColumnType_INT":       "integer",
	"ColumnType_DOUBLE":    "double precision",
	"ColumnType_STRING":    "text",
	"ColumnType_JSON":      "json",
	"ColumnType_DATETIME":  "timestamp with time zone", // Deprecated - use ColumnType_TIMESTAMP
	"ColumnType_TIMESTAMP": "timestamp with time zone",
	"ColumnType_IPADDR":    "inet",
	"ColumnType_CIDR":      "cidr",
	"ColumnType_UNKNOWN":   "unknown",
	"ColumnType_INET":      "inet",  // Either an IP Address or an IP network CIDR
	"ColumnType_LTREE":     "ltree", // Ltree
}

// Map of acceptable PostgreSQL data types.
var postgresDataTypes = map[string]string{
	"boolean":                  "boolean",
	"integer":                  "integer",
	"double precision":         "double precision",
	"text":                     "text",
	"json":                     "json",
	"timestamp with time zone": "timestamp with time zone",
	"inet":                     "inet",
	"cidr":                     "cidr",
	"ltree":                    "ltree",
	"unknown":                  "text", // Map unknown to text
}

// Operator mapping based on data type.
var operatorMapping = map[string][]string{
	"text":                     {"=", "!=", "~~", "!~~", "~~*", "!~~*", "~", "!~", "~*", "!~*", "is null", "is not null"},
	"integer":                  {"=", "!=", "<", "<=", ">", ">=", "is null", "is not null"},
	"double precision":         {"=", "!=", "<", "<=", ">", ">=", "is null", "is not null"},
	"boolean":                  {"=", "!=", "is null", "is not null"},
	"timestamp with time zone": {"=", "!=", "<", "<=", ">", ">=", "is null", "is not null"},
	"inet":                     {"=", "!=", "is null", "is not null"},
	"cidr":                     {"=", "!=", "is null", "is not null"},
	"ltree":                    {"=", "!=", "is null", "is not null"},
	"json":                     {"=", "!=", "is null", "is not null"},
}

// Operator abbreviations.
var operatorAbbreviations = map[string]string{
	"=":           "=",
	"<>":          "!=",
	"!=":          "!=",
	"<":           "<",
	"<=":          "<=",
	">":           ">",
	">=":          ">=",
	"~~":          "~~",
	"!~~":         "!~~",
	"~~*":         "~~*",
	"!~~*":        "!~~*",
	"~":           "~",
	"!~":          "!~",
	"~*":          "~*",
	"!~*":         "!~*",
	"is null":     "is null",
	"is not null": "is not null",
}

// Regex patterns for repository names.
var repoNameRegex = regexp.MustCompile(`([^/]+?)(?:\.git)?$`)
