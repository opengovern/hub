package main

import (
	"io/ioutil"

	"gopkg.in/yaml.v2"
)

type DatabaseConfig struct {
	Host     string `yaml:"host"`
	Port     string `yaml:"port"`
	User     string `yaml:"user"`
	Password string `yaml:"password"`
	DBName   string `yaml:"dbname"`
	SSLMode  string `yaml:"sslmode"`
}

type Config struct {
	Database    DatabaseConfig `yaml:"database"`
	WorkerCount int            `yaml:"workerCount"`
}

// LoadConfig reads the configuration from config.yaml
func LoadConfig() (*Config, error) {
	data, err := ioutil.ReadFile("db-config.yaml") // or "db-config.yaml" if you renamed it
	if err != nil {
		return nil, err
	}
	var cfg Config
	err = yaml.Unmarshal(data, &cfg)
	if err != nil {
		return nil, err
	}
	return &cfg, nil
}
