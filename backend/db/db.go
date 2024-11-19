package db

import (

	"gorm.io/gorm"
	 "github.com/opengovern/website/db/models"

)

type Database struct {
	Orm *gorm.DB
}


func (db Database) Initialize() error {
	err := db.Orm.AutoMigrate(
		&models.Control{},
		&models.Query{},
		&models.QueryParameter{},
		&models.BenchmarkAssignment{},
		&models.BenchmarkMetadata{},
		&models.Benchmark{},
		&models.BenchmarkControls{},
		&models.BenchmarkAssignmentsCount{},		
	)
	if err != nil {
		return err
	}

	return nil
}

func (db Database) ListBenchmark() ([]models.Benchmark, error) {
	var s []models.Benchmark
	tx := db.Orm.Model(&models.Benchmark{}).	
		Order("created_at desc").
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return s, nil
}
