package types

import (
	"context"

	"github.com/opengovern/schema/sync-job/config"
	"go.uber.org/zap"
)

type Migration interface {
	Run(ctx context.Context, conf config.MigratorConfig, logger *zap.Logger) error
	IsGitBased() bool
	AttachmentFolderPath() string
}
