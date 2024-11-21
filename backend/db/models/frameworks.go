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
	ControlCount int
	ChildrenCount int
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


type NestedBenchmark struct {
	ID                string              `json:"id" example:"azure_cis_v140"`                                                                                                                                                       // Benchmark ID
	Title             string              `json:"title" example:"Azure CIS v1.4.0"`                                                                                                                                                  // Benchmark title
	ReferenceCode     string              `json:"referenceCode" example:"CIS 1.4.0"`                                                                                                                                                 // Benchmark display code
	Description       string              `json:"description" example:"The CIS Microsoft Azure Foundations Security Benchmark provides prescriptive guidance for establishing a secure baseline configuration for Microsoft Azure."` // Benchmark description
	LogoURI           string              `json:"logoURI"`                                                                                                                                                                           // Benchmark logo URI
	Category          string              `json:"category"`                                                                                                                                                                          // Benchmark category
	DocumentURI       string              `json:"documentURI" example:"benchmarks/azure_cis_v140.md"`                                                                                                                                // Benchmark document URI
	AutoAssign        bool                `json:"autoAssign" example:"true"`                                                                                                                                                         // Whether the benchmark is auto assigned or not
	TracksDriftEvents bool                `json:"tracksDriftEvents" example:"true"`                                                                                                                                                  // Whether the benchmark tracks drift events or not
	Tags              map[string][]string `json:"tags" `                                                                                                                                                                             // Benchmark tags
	IntegrationTypes  []string  `json:"integrationTypes" example:"[azure]"`                                                                                                                                                // Benchmark connectors
	Children          []NestedBenchmark   `json:"children" example:"[azure_cis_v140_1, azure_cis_v140_2]"`                                                                                                                           // Benchmark children
	Controls          []string            `json:"controls" example:"[azure_cis_v140_1_1, azure_cis_v140_1_2]"`                                                                                                                       // Benchmark controls
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`	                                                                                                                       // Benchmark last update date
}
