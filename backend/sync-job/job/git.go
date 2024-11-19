package job

import (
	"os"

	"encoding/json"
	// "strings"

	"github.com/opengovern/website/sync-job/config"
	git2 "github.com/opengovern/website/sync-job/job/git"
	"go.uber.org/zap"
)

func GitClone(conf config.MigratorConfig, logger *zap.Logger) (string, error) {
	gitConfig := GitConfig{
		AnalyticsGitURL:         conf.AnalyticsGitURL,
		githubToken:             conf.GithubToken,
	}


	

	logger.Info("using git repo", zap.String("url", gitConfig.AnalyticsGitURL))

	refs := make([]string, 0, 2)
    os.RemoveAll(config.ConfigzGitPath)

    
	res, err := git2.CloneRepository(logger, gitConfig.AnalyticsGitURL, config.ConfigzGitPath)
	if err != nil {
		logger.Error("failed to clone repository", zap.Error(err))
		return "", err
	}

	logger.Info("finished fetching configz data")

	ref, err := res.Head()
	if err != nil {
		logger.Error("failed to get head", zap.Error(err))
		return "", err
	}
	refs = append(refs, ref.Hash().String())

refsJson, err := json.Marshal(refs)
	if err != nil {
		logger.Error("failed to marshal refs", zap.Error(err))
		return "", err
	}
	 return string(refsJson), nil
}
