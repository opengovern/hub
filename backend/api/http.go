package api

import (
	"encoding/json"
	"net/http"
	"strconv"
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


func (s API) Register(e *echo.Echo) {
	 e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
      AllowOrigins: []string{"*"},
      AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
    }))  
	g := e.Group("/api")
	g.GET("/frameworks",s.Frameworks)
	g.GET("/frameworks/:id",s.FrameWorKDetail)
	g.GET("/frameworks/:id/tree",s.FrameWorkTree)

	g.GET("/frameworks/:frameworkId/controls",s.FrameWorkControls)
	g.GET("/controls/:id",s.ControlDetail)
	g.GET("/query/:control_id",s.ControlQuery)


}


func (s API) Frameworks(ctx echo.Context) error {
	var cursor, perPage int64
	var err error
	cursorStr := ctx.QueryParam("cursor")
	if cursorStr != "" {
		cursor, err = strconv.ParseInt(cursorStr, 10, 64)
		if err != nil {
			return err
		}
	}
	perPageStr := ctx.QueryParam("per_page")
	if perPageStr != "" {
		perPage, err = strconv.ParseInt(perPageStr, 10, 64)
		if err != nil {
			return err
		}
	}
	frameworks,err := s.db.ListRootBenchmarksWithSubtreeControls()
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
			Control_Count: len(framework.Controls),
			NumberOfTables: len(metadata.ListOfTables),
			CreatedAt: framework.CreatedAt.String(),
			UpdatedAt: framework.UpdatedAt.String(),
		})
	}
	paginated := service.Paginate(cursor, perPage, response)
	final_response := map[string]interface{}{
		"frameworks": paginated,
		"total": len(response),
	}

	return ctx.JSON(http.StatusOK,final_response)



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
func (s API) FrameWorkTree(ctx echo.Context) error {
	id:= ctx.Param("id")
	if id == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "id is required")
	}
	nested, err := s.db.GetBenchmarkTree(id)
	if err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, "could not get benchmark tree")
	}

	return ctx.JSON(http.StatusOK, nested)

}

func (s API) FrameWorkControls(ctx echo.Context) error {
	frameWorkID := ctx.Param("frameworkId")
	var cursor, perPage int64
	var err error
	cursorStr := ctx.QueryParam("cursor")
	if cursorStr != "" {
		cursor, err = strconv.ParseInt(cursorStr, 10, 64)
		if err != nil {
			return err
		}
	}
	perPageStr := ctx.QueryParam("per_page")
	if perPageStr != "" {
		perPage, err = strconv.ParseInt(perPageStr, 10, 64)
		if err != nil {
			return err
		}
	}
	if frameWorkID == "" {
		return echo.NewHTTPError(http.StatusBadRequest, "frameworkId is required")
	}
	var frameworks []string
	childs ,err := s.getChildBenchmarks(ctx, frameWorkID)
	if err != nil {
		return err
	}
	frameworks = append(frameworks, frameWorkID)
	frameworks = append(frameworks, childs...)
	controls,err := s.db.BenchmarkControls(frameworks)
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
	paginated := service.Paginate(cursor, perPage, response)
	final_response := map[string]interface{}{
		"controls": paginated,
		"total": len(response),
	}
	
	return ctx.JSON(http.StatusOK,final_response)


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
		Query: control.Query.QueryToExecute,

	}
	return ctx.JSON(http.StatusOK, resp)


}



func (s API) ControlQuery(ctx echo.Context) error {
	id:= ctx.Param("control_id")
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
		Query: control.Query.QueryToExecute,
	}
	return ctx.JSON(http.StatusOK, resp)


}





func (h API) getChildBenchmarks(ctx echo.Context, benchmarkId string) ([]string, error) {
	var benchmarks []string
	benchmark, err := h.db.BenchamrkDetail( benchmarkId)
	if err != nil {
		h.logger.Error("failed to fetch benchmarks", zap.Error(err))
		return nil, err
	}
	
	for _, child := range benchmark.Children {
		childBenchmarks, err := h.getChildBenchmarks(ctx, child.ID)
		if err != nil {
			return nil, err
		}
		benchmarks = append(benchmarks, childBenchmarks...)
	}
	benchmarks = append(benchmarks, benchmarkId)
	return benchmarks, nil
}