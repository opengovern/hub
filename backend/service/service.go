package service

import (
	"github.com/opengovern/schema/config"

	"go.uber.org/zap"
)

type SchemaService struct {
	cfg    config.SchemaConfig
	logger *zap.Logger

}

func NewschemaService(cfg config.SchemaConfig, logger *zap.Logger) *SchemaService {
	return &SchemaService{
		cfg:           cfg,
		logger:        logger.Named("information-service"),
	
	}
}

