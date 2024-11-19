package config

import "github.com/opengovern/og-util/pkg/config"

type MigratorConfig struct {
	PostgreSQL              config.Postgres
	AnalyticsGitURL         string `yaml:"analytics_git_url"`
	GithubToken             string `yaml:"github_token"`
	
}
