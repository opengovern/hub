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


func Paginate[T any](page, size int64, arr []T) []T {
	if page < 1 {
		page = 1
	}
	if size < 1 {
		size = 1
	}
	start := (page - 1) * size
	end := start + size
	if start > int64(len(arr)) {
		start = int64(len(arr))
	}
	if end > int64(len(arr)) {
		end = int64(len(arr))
	}
	return arr[start:end]
}

