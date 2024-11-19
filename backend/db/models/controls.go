package models

import (
	"time"

	"github.com/lib/pq"

)






type Control struct {
	ID          string `gorm:"primaryKey"`
	Title       string
	Description string
	IntegrationType    pq.StringArray `gorm:"type:text[]"`
	DocumentURI        string
	Enabled            bool
	QueryID            *string
	Query              *Query      `gorm:"foreignKey:QueryID;references:ID;constraint:OnDelete:SET NULL"`
	Benchmarks         []Benchmark `gorm:"many2many:benchmark_controls;"`
	Severity           ComplianceResultSeverity
	ManualVerification bool
	Managed            bool
	CreatedAt          time.Time
	UpdatedAt          time.Time
}


