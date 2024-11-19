package job

import (
	"github.com/opengovern/website/sync-job/job/migrations/compliance"

	"github.com/opengovern/website/sync-job/job/types"
)

var migrations = map[string]types.Migration{

	"compliance":          compliance.Migration{},

	
}

