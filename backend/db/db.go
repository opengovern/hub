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
func (db Database) BenchamrkDetail(id string) (*models.Benchmark, error) {
	var s models.Benchmark
	tx := db.Orm.Model(&models.Benchmark{}).	
		Where("id =?",id).
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return &s, nil
}


func (db Database) BenchmarkControls(id string) ([]models.Control, error) {
	var benchmark_controls []models.BenchmarkControls
	tx := db.Orm.Model(&models.BenchmarkControls{}).	
		Where("benchmark_id =?",id).
		Find(&benchmark_controls)
	if tx.Error != nil {
		return nil, tx.Error
	}
	var controlIds []string
	for _, control := range benchmark_controls {
		controlIds = append(controlIds, control.ControlID)
	}
	var controls  []models.Control
	tx = db.Orm.Model(&models.Control{}).
	Where("id IN ?",controlIds).Find(&controls)

	if tx.Error != nil {
		return nil, tx.Error
	}
	
	return controls, nil
}


func (db Database) ControlDetail(id string) (*models.Control, error) {
	var s models.Control
	tx := db.Orm.Model(&models.Control{}).	
		Where("id =?",id).
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return &s, nil
}
