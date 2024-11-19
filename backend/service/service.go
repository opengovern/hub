package service

import (
	"github.com/opengovern/website/config"

	"go.uber.org/zap"
)

type WebsiteService struct {
	cfg    config.WebsiteConfig
	logger *zap.Logger

}

func NewwebsiteService(cfg config.WebsiteConfig, logger *zap.Logger) *WebsiteService {
	return &WebsiteService{
		cfg:           cfg,
		logger:        logger.Named("website-service"),
	
	}
}

