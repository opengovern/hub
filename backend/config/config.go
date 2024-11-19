package config

import "github.com/opengovern/og-util/pkg/koanf"

type WebsiteConfig struct {
	Postgres koanf.Postgres   `json:"postgres,omitempty" koanf:"postgres"`
	Http     koanf.HttpServer `json:"http,omitempty" koanf:"http"`
}
