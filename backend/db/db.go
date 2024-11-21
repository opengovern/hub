package db

import (
	"github.com/opengovern/website/db/models"
	"gorm.io/gorm"
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
		&models.BenchmarkChild{},
		&models.BenchmarkAssignmentsCount{},		
	)
	if err != nil {
		return err
	}

	return nil
}

func (db Database) GetBenchmarkTree(id string) (*models.NestedBenchmark, error) {
	var b *models.Benchmark
	var err error
	b,err = db.BenchamrkDetail(id)
	var children []models.NestedBenchmark
	var s []models.BenchmarkChild
	tx := db.Orm.Model(&models.BenchmarkChild{}).	
		Where("benchmark_id = ?",id).
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	var childrenList []string
	for _, child := range s {
		childrenList = append(childrenList, child.ChildID)
	}
	
	 childrens,new_err := db.ListBenchmarkOfIdS(childrenList)
	 if new_err != nil {
		return nil, new_err
	}
	
	
	for _, child := range childrens {
		childNested, err := db.GetBenchmarkTree( child.ID)
		if err != nil {
			return nil, err
		}
		children = append(children, *childNested)
	}

	nb := models.NestedBenchmark{
		ID:                b.ID,
		Title:             b.Title,
		ReferenceCode:     b.DisplayCode,
		Description:       b.Description,
		LogoURI:           b.LogoURI,
		Category:          b.Category,
		DocumentURI:       b.DocumentURI,
		AutoAssign:        b.AutoAssign,
		TracksDriftEvents: b.TracksDriftEvents,
		CreatedAt:         b.CreatedAt.String(),
		UpdatedAt:         b.UpdatedAt.String(),
		Children:          children,
	}
	
	
	return &nb, err
}
func (db Database) ListBenchmarkOfIdS(ids []string) ([]models.Benchmark, error) {
	var s []models.Benchmark
	tx := db.Orm.Model(&models.Benchmark{}).	
		Where("id IN ?",ids).
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return s, nil
}


func (db Database) ListBenchmark() ([]models.Benchmark, error) {
	var s []models.Benchmark
	tx := db.Orm.Model(&models.Benchmark{}).	
		Order("control_count desc").
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
// new function for count of benchmark controls
func (db Database) BenchmarkControlsCount(id string) (int, error) {
	var count int64
	tx := db.Orm.Model(&models.BenchmarkControls{}).	
		Where("benchmark_id =?",id).
		Count(&count)
	if tx.Error != nil {
		return 0, tx.Error
	}
	return int(count), nil

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

