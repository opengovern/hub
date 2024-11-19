package api

import (
	"github.com/labstack/echo/v4"
	"github.com/opengovern/website/config"
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
}

func New(cfg config.WebsiteConfig, logger *zap.Logger, informationService *service.WebsiteService) API {
	return API{
		cfg:                cfg,
		informationService: informationService,
		tracer:             otel.GetTracerProvider().Tracer("information.http.sources"),
		logger:             logger.Named("information-api"),
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



