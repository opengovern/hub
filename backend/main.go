package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/opengovern/og-util/pkg/httpserver"
	"github.com/opengovern/og-util/pkg/koanf"
	"github.com/opengovern/og-util/pkg/postgres"
	"github.com/opengovern/website/api"
	"github.com/opengovern/website/config"
	"github.com/opengovern/website/db"
	"github.com/opengovern/website/service"
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
	cnf := koanf.Provide("website", config.WebsiteConfig{
		Postgres: koanf.Postgres{
			Host:     "localhost",
			Port:     "5432",
			Username: "postgres",
		},
		Http: koanf.HttpServer{
			Address: "localhost:8000",
		},
	})

	cmd := &cobra.Command{
		RunE: func(cmd *cobra.Command, _ []string) error {
			ctx := cmd.Context()
			logger, err := zap.NewProduction()
			if err != nil {
				return err
			}

			logger = logger.Named("website")

			cmd.SilenceUsage = true

			orm, err := postgres.NewClient(&postgres.Config{
				Host:    cnf.Postgres.Host,
				Port:    cnf.Postgres.Port,
				User:    cnf.Postgres.Username,
				Passwd:  cnf.Postgres.Password,
				DB:      cnf.Postgres.DB,
				SSLMode: cnf.Postgres.SSLMode,
			}, logger)
			if err != nil {
				return err
			}
			db := db.Database{Orm: orm}
			err = db.Initialize()
			if err != nil {
					return fmt.Errorf("new postgres client: %w", err)
			}
			
		

			websiteService := service.NewwebsiteService(cnf, logger)
			return httpserver.RegisterAndStart(
				ctx,
				logger,
				cnf.Http.Address,
				api.New(cnf, logger, websiteService,db),
			)
		},
	}

	return cmd
}
