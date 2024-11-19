package job

import (
	"crypto/sha256"
	"encoding/base64"
	"io/fs"
	"os"
	"path/filepath"
	"strings"

	"github.com/opengovern/schema/sync-job/job/types"
)




func (w *Job) FindFilesHashes(mig types.Migration) (string, error) {
	h := sha256.New()
	err := filepath.Walk(mig.AttachmentFolderPath(), func(path string, info fs.FileInfo, err error) error {
		if info == nil || info.IsDir() || strings.HasPrefix(info.Name(), ".") {
			return nil
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return err
		}

		_, err = h.Write(content)
		if err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		return "", err
	}
	return base64.StdEncoding.EncodeToString(h.Sum(nil)), nil
}
