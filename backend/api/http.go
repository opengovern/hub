package api

import (
	"fmt"

	"github.com/go-git/go-git/v5/utils/merkletrie/internal/frame"
	"github.com/labstack/echo/v4"
	"github.com/opengovern/website/config"
	"github.com/opengovern/website/db"
	"github.com/opengovern/website/service"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/trace"
	"go.uber.org/zap"
)

type API struct {
	cfg                config.WebsiteConfig
	tracer             trace.Tracer
	logger             *zap.Logger
	informationService *service.WebsiteService
	db					 db.Database
}

func New(cfg config.WebsiteConfig, logger *zap.Logger, informationService *service.WebsiteService,database db.Database) API {
	return API{
		cfg:                cfg,
		informationService: informationService,
		tracer:             otel.GetTracerProvider().Tracer("information.http.sources"),
		logger:             logger.Named("information-api"),
		db: database,
	}
}
func bindValidate(ctx echo.Context, i any) error {
	if err := ctx.Bind(i); err != nil {
		return err
	}
	if err := ctx.Validate(i); err != nil {
		return err
	}

	return nil
}

func (s API) Register(e *echo.Echo) {
	g := e.Group("/api/v1/")
	g.GET("/frameworks",s.Frameworks)
	g.GET("/framework/:id",s.FrameWorKDetail)
	g.GET("/framework/:id/controls",s.FrameWorkControls)
	g.GET("control/:id",s.ControlDetail)

}


func (s API) Frameworks(ctx echo.Context) error {
	frameworks,err := s.db.ListBenchmark()
	if err != nil {
		return err
	}
	fmt.Print(frameworks)
	return nil



}


func (s API) FrameWorKDetail(ctx echo.Context) error {
	return nil


}

func (s API) FrameWorkControls(ctx echo.Context) error {
	return nil


}

func (s API) ControlDetail(ctx echo.Context) error {
	return nil


}



