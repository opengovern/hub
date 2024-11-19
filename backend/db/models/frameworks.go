package models

import (
	
	"time"

	"github.com/jackc/pgtype"


	"github.com/lib/pq"

	"gorm.io/gorm"
)



type BenchmarkAssignment struct {
	gorm.Model
	BenchmarkId        string  `gorm:"index:idx_benchmark_source; index:idx_benchmark_rc; not null"`
	IntegrationID      *string `gorm:"index:idx_benchmark_source"`
	ResourceCollection *string `gorm:"index:idx_benchmark_rc"`
	AssignedAt         time.Time
}

type BenchmarkAssignmentsCount struct {
	BenchmarkId string
	Count       int
}

type BenchmarkMetadata struct {
	IsRoot        bool
	Controls      []string
	PrimaryTables []string
	ListOfTables  []string
	BenchmarkPath string
}

type Benchmark struct {
	ID                string `gorm:"primarykey"`
	Title             string
	DisplayCode       string
	IntegrationType   pq.StringArray `gorm:"type:text[]"`
	Description       string
	LogoURI           string
	Category          string
	DocumentURI       string
	Enabled           bool
	AutoAssign        bool
	TracksDriftEvents bool
	Metadata          pgtype.JSONB
	Children  []Benchmark `gorm:"many2many:benchmark_children;"`
	Controls  []Control   `gorm:"many2many:benchmark_controls;"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type BenchmarkChild struct {
	BenchmarkID string
	ChildID     string
}



type BenchmarkControls struct {
	BenchmarkID string
	ControlID   string
}

type ComplianceResultSeverity string
func (s ComplianceResultSeverity) String() string {
	return string(s)
}
