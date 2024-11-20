package api

import (
	"strings"

	db "github.com/opengovern/website/db/models"
)



const (
	ComplianceResultSeverityNone     db.ComplianceResultSeverity = "none"
	ComplianceResultSeverityLow      db.ComplianceResultSeverity = "low"
	ComplianceResultSeverityMedium   db.ComplianceResultSeverity = "medium"
	ComplianceResultSeverityHigh     db.ComplianceResultSeverity = "high"
	ComplianceResultSeverityCritical db.ComplianceResultSeverity = "critical"
)


var complianceResultSeveritiesSeverities = []db.ComplianceResultSeverity{
	ComplianceResultSeverityNone,
	ComplianceResultSeverityLow,
	ComplianceResultSeverityMedium,
	ComplianceResultSeverityHigh,
	ComplianceResultSeverityCritical,
}
func ParseComplianceResultSeverity(s string) db.ComplianceResultSeverity {
	s = strings.ToLower(s)
	for _, sev := range complianceResultSeveritiesSeverities {
		if s == strings.ToLower(sev.String()) {
			return sev
		}
	}
	return ""
}

func ParseComplianceResultSeverities(list []string) []db.ComplianceResultSeverity {
	result := make([]db.ComplianceResultSeverity, 0, len(list))
	for _, s := range list {
		result = append(result, ParseComplianceResultSeverity(s))
	}
	return result
}


type BecnhmarkListResponse struct {
	ID		  string `json:"id"`
	Title 	  string `json:"title"`
	IntegrationType []string `json:"integration_type"`
	Description string `json:"description"`
	Control_Count int `json:"control_count"`
	NumberOfTables int `json:"number_of_tables"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`

	

}
type BenchmarkDetailResponse struct {
	ID string `json:"id"`
	Title string `json:"title"`
	Description string `json:"description"`
	IntegrationType []string `json:"integration_type"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
	Enabled bool `json:"enabled"`
	AutoAssign bool `json:"auto_assign"`

}

type ControlListResponse struct {
	ID string `json:"id"`
	Title string `json:"title"`
	Description string `json:"description"`
	IntegrationType []string `json:"integration_type"`
	Enabled bool `json:"enabled"`
	Severity db.ComplianceResultSeverity `json:"severity"`
	ManualVerification bool `json:"manual_verification"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`	
}

type ControlDetailResponse struct {
	ID string `json:"id"`
	Title string `json:"title"`
	Description string `json:"description"`
	IntegrationType []string `json:"integration_type"`
	Enabled bool `json:"enabled"`
	Severity db.ComplianceResultSeverity `json:"severity"`
	ManualVerification bool `json:"manual_verification"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`	

}