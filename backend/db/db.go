package db

import (
	"github.com/opengovern/website/db/models"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
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


func (db Database) ListRootBenchmarks() ([]models.Benchmark, error) {
	var s []models.Benchmark
	tx := db.Orm.Model(&models.Benchmark{}).	
	    Where("NOT EXISTS (SELECT 1 FROM benchmark_children WHERE benchmark_children.child_id = benchmarks.id)").
		Preload(clause.Associations).
		
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return s, nil
}
func (db Database) ListBenchmarks() ([]models.Benchmark, error) {
	var s []models.Benchmark
	tx := db.Orm.Model(&models.Benchmark{}).Preload(clause.Associations).
	Order("control_count desc").
	
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return s, nil
}
func (db Database) ListRootBenchmarksWithSubtreeControls() ([]models.Benchmark, error) {
	var benchmarks []models.Benchmark

	allBenchmarks, err := db.ListBenchmarks()
	if err != nil {
		return nil, err
	}
	allBenchmarksMap := make(map[string]models.Benchmark)
	for _, b := range allBenchmarks {
		allBenchmarksMap[b.ID] = b
	}

	var populateControls func( benchmark *models.Benchmark) error
	populateControls = func( benchmark *models.Benchmark) error {
		
		if benchmark == nil {
			return nil
		}
		if len(benchmark.Children) > 0 {
			for _, child := range benchmark.Children {
				child := allBenchmarksMap[child.ID]
				err := populateControls( &child)
				if err != nil {
					return err
				}
				for _, control := range child.Controls {
					found := false
					for _, c := range benchmark.Controls {
						if c.ID == control.ID {
							found = true
							break
						}
					}
					if !found {
						benchmark.Controls = append(benchmark.Controls, control)
					}
				}
			}
		}
		return nil
	}

	rootBenchmarks, err := db.ListRootBenchmarks( )
	if err != nil {
		return nil, err
	}

	for _, b := range rootBenchmarks {
		err := populateControls( &b)
		if err != nil {
			return nil, err
		}
		benchmarks = append(benchmarks, b)
	}

	return benchmarks, nil
}

func (db Database) BenchamrkDetail(id string) (*models.Benchmark, error) {
	var s models.Benchmark
	tx := db.Orm.Model(&models.Benchmark{}).
		Preload(clause.Associations).
		Where("id =?",id).
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return &s, nil
}


func (db Database) BenchmarkControls(ids []string) ([]models.Control, error) {
	
	
	var controls  []models.Control
	tx := db.Orm.Model(&models.Control{}).
	Distinct("controls.*").
	Preload("Benchmarks").
	Joins("JOIN benchmark_controls bc ON bc.control_id = controls.id").
	Where("bc.benchmark_id IN ?", ids).
	Order("created_at desc").
	Find(&controls)

	if tx.Error != nil {
		return nil, tx.Error
	}
	
	return controls, nil
}
// new function for count of benchmark controls



func (db Database) ControlDetail(id string) (*models.Control, error) {
	var s models.Control
	tx := db.Orm.Model(&models.Control{}).	
		Where("id =?",id).
		Preload(clause.Associations).
		Find(&s)
	if tx.Error != nil {
		return nil, tx.Error
	}
	return &s, nil
}

