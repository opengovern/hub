package db

import (

	"gorm.io/gorm"
)

type Database struct {
	Orm *gorm.DB
}
