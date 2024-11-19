package db

import (
	"time"

	"github.com/lib/pq"
	"github.com/opengovern/og-util/pkg/model"

)




type ControlTagsResult struct {
	Key          string
	UniqueValues pq.StringArray `gorm:"type:text[]"`
}

type Control struct {
	ID          string `gorm:"primaryKey"`
	Title       string
	Description string
	Tags    []ControlTag        `gorm:"foreignKey:ControlID;references:ID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	tagsMap map[string][]string `gorm:"-:all"`
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



type ControlTag struct {
	model.Tag
	ControlID string `gorm:"primaryKey"`
}