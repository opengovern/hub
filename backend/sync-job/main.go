package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
"github.com/spf13/cobra"
	"go.uber.org/zap"
	config2 "github.com/opengovern/schema/sync-job/config"
	"github.com/opengovern/og-util/pkg/config"
	"github.com/opengovern/schema/sync-job/job"



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
	var (
		cnf config2.MigratorConfig
	)
	config.ReadFromEnv(&cnf, nil)
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
