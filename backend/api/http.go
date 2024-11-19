package api

import (
	"github.com/labstack/echo/v4"
	"github.com/opengovern/schema/config"
	"github.com/opengovern/schema/service"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/trace"
	"go.uber.org/zap"
)

type API struct {
	cfg                config.SchemaConfig
	tracer             trace.Tracer
	logger             *zap.Logger
	informationService *service.SchemaService
}

func New(cfg config.SchemaConfig, logger *zap.Logger, informationService *service.SchemaService) API {
	return API{
		cfg:                cfg,
		informationService: informationService,
		tracer:             otel.GetTracerProvider().Tracer("information.http.sources"),
		logger:             logger.Named("information-api"),
	}
}

func (s API) Register(e *echo.Echo) {
	// g := e.Group("/api/v1/schema")
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
