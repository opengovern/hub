package api

import (
	"strings"

	"github.com/opengovern/schema/db/models"
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
