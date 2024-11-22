package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/opengovern/og-util/pkg/config"
	"github.com/opengovern/og-util/pkg/koanf"
	config2 "github.com/opengovern/website/sync-job/config"
	"github.com/opengovern/website/sync-job/job"
	"github.com/spf13/cobra"
	"go.uber.org/zap"
)

func main() {
	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	defer func() {
		signal.Stop(c)
		cancel()
	}()

	go func() {
		select {
		case <-c:
			cancel()
		case <-ctx.Done():
		}
	}()

	if err := Command().ExecuteContext(ctx); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}


func Command() *cobra.Command {
	
	cnf := koanf.Provide("website", config2.MigratorConfig{
		PostgreSQL: config.Postgres{
			Host:     "postgres",
			Port:     "5432",
			Username: "website",
			DB:      "website",
			Password: "postgres",

		},
		AnalyticsGitURL: "https://github.com/opengovern/platform-configuration",
	})
	logger, err := zap.NewProduction()
	if err != nil {
		panic(err)
	}


	cmd := &cobra.Command{
		RunE: func(cmd *cobra.Command, args []string) error {

			cmd.SilenceUsage = true

			j, err := job.InitializeJob(cnf, logger)
			if err != nil {
				return fmt.Errorf("failed to initialize job: %w", err)
			}

			return j.Run(cmd.Context())
		},
	}

	return cmd
}
