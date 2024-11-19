package models

import (
	
	"time"

	"github.com/lib/pq"
	
)


type Query struct {
	ID              string `gorm:"primaryKey"`
	QueryToExecute  string
	IntegrationType pq.StringArray `gorm:"type:text[]"`
	PrimaryTable    *string
	ListOfTables    pq.StringArray `gorm:"type:text[]"`
	Engine          string
	Controls        []Control        `gorm:"foreignKey:QueryID"`
	Parameters      []QueryParameter `gorm:"foreignKey:QueryID"`
	Global          bool
	CreatedAt       time.Time
	UpdatedAt       time.Time
}

type QueryParameter struct {
	QueryID  string `gorm:"primaryKey"`
	Key      string `gorm:"primaryKey"`
	Required bool   `gorm:"not null"`
}
