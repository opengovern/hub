package api

import (
	"encoding/json"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/opengovern/website/config"
	"github.com/opengovern/website/db"
	"github.com/opengovern/website/db/models"
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
	 e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
      AllowOrigins: []string{"*"},
      AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
    }))  
	g := e.Group("/api")
	g.GET("/frameworks",s.Frameworks)
	g.GET("/frameworks/:id",s.FrameWorKDetail)
	g.GET("/frameworks/:frameworkId/controls",s.FrameWorkControls)
	g.GET("/controls/:id",s.ControlDetail)

}


func (s API) Frameworks(ctx echo.Context) error {
	frameworks,err := s.db.ListBenchmark()
	if err != nil {
		return err
	}
	var response []BecnhmarkListResponse
	for _, framework := range frameworks {
		var metadata models.BenchmarkMetadata
		if err := json.Unmarshal(framework.Metadata.Bytes, &metadata); err != nil {
		
		return err
	}
		
		response = append(response, BecnhmarkListResponse{
			ID: framework.ID,
			Title: framework.Title,
			IntegrationType: framework.IntegrationType,
			Description: framework.Description,
			Control_Count: framework.ControlCount,
			NumberOfTables: len(metadata.ListOfTables),
			CreatedAt: framework.CreatedAt.String(),
			UpdatedAt: framework.UpdatedAt.String(),
		})
	}
	return ctx.JSON(http.StatusOK, response)



}


func (s API) FrameWorKDetail(ctx echo.Context) error {
	id:= ctx.Param("id")
	if id == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "id is required")
	}
	framework,err := s.db.BenchamrkDetail(id)
	if err != nil {
		return err
	}
	resp:= BenchmarkDetailResponse{
		ID: framework.ID,
		Title: framework.Title,
		IntegrationType: framework.IntegrationType,
		Description: framework.Description,
		CreatedAt: framework.CreatedAt.String(),
		UpdatedAt: framework.UpdatedAt.String(),
		Enabled: framework.Enabled,
		AutoAssign: framework.AutoAssign,
	}
	return ctx.JSON(http.StatusOK, resp)



}

func (s API) FrameWorkControls(ctx echo.Context) error {
	frameWorkID := ctx.Param("frameworkId")
	if frameWorkID == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "frameworkId is required")
	}
	controls,err := s.db.BenchmarkControls(frameWorkID)
	if err != nil {
		return err
	}
	var response []ControlListResponse
	for _, control := range controls {
		response = append(response, ControlListResponse{
			ID: control.ID,
			Title: control.Title,
			Description: control.Description,
			IntegrationType: control.IntegrationType,
			Enabled: control.Enabled,
			Severity: control.Severity,
			ManualVerification: control.ManualVerification,
			CreatedAt: control.CreatedAt.String(),
			UpdatedAt: control.UpdatedAt.String(),
		})
	}
	return ctx.JSON(http.StatusOK, response)


}

func (s API) ControlDetail(ctx echo.Context) error {
	id:= ctx.Param("id")
	if id == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "id is required")
	}
	control,err := s.db.ControlDetail(id)
	if err != nil {
		return err
	}
	resp:= ControlDetailResponse{
		ID: control.ID,
		Title: control.Title,
		Description: control.Description,
		IntegrationType: control.IntegrationType,
		Enabled: control.Enabled,
		Severity: control.Severity,
		ManualVerification: control.ManualVerification,
		CreatedAt: control.CreatedAt.String(),
		UpdatedAt: control.UpdatedAt.String(),
	}
	return ctx.JSON(http.StatusOK, resp)


}



