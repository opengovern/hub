package job

import (
	"context"
	"fmt"

	"github.com/opengovern/website/sync-job/config"
	"go.uber.org/zap"
)

type GitConfig struct {
	AnalyticsGitURL         string
	ControlEnrichmentGitURL string
	githubToken             string
}

type Job struct {
	logger     *zap.Logger
	conf       config.MigratorConfig
	commitRefs string
}

func InitializeJob(
	conf config.MigratorConfig,
	logger *zap.Logger,
) (w *Job, err error) {
	
	
	w.commitRefs, err = GitClone(conf, logger)


	if err != nil {
		return nil, fmt.Errorf("failure while running git clone: %w", err)
	}

	return w, nil
}

func (w *Job) Run(ctx context.Context) error {
	defer func() {
		if r := recover(); r != nil {
			w.logger.Error("paniced with error", zap.Error(fmt.Errorf("%v", r)))
		}
	}()
	w.logger.Info("Starting migrator job")




	for name, mig := range migrations {
		w.logger.Info("running migration", zap.String("migrationName", name))

		
		migErr := mig.Run(ctx, w.conf, w.logger)
		if migErr != nil {
			w.logger.Error("failed to run migration", zap.Error(migErr), zap.String("migrationName", name))
		}
		
	}

	
	return nil
}

