package job

import (
	"github.com/opengovern/schema/sync-job/job/migrations/compliance"
	
	"github.com/opengovern/schema/sync-job/job/types"
)

var migrations = map[string]types.Migration{

	"compliance":          compliance.Migration{},

	
}

