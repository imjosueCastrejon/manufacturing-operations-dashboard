import { Controller, Get } from '@nestjs/common';
import { ProductionMetricsService } from './production-metrics.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('production-metrics')
@Controller('production-metrics')
export class ProductionMetricsController {
  constructor(
    private readonly productionMetricsService: ProductionMetricsService,
  ) {}

  @Get('dashboard')
  @ApiOperation({
    summary: 'Obtener métricas dinámicas para el dashboard industrial',
  })
  @ApiResponse({
    status: 200,
    description: 'Métricas calculadas exitosamente',
    schema: {
      type: 'object',
      properties: {
        activeWorkOrders: { type: 'number' },
        completedWorkOrders: { type: 'number' },
        openQualityIssues: { type: 'number' },
        productionEfficiency: { type: 'number' },
        dailyProductionOutput: { type: 'number' },
        qualityRate: { type: 'number' },
      },
    },
  })
  getDashboardMetrics() {
    return this.productionMetricsService.getDashboardMetrics();
  }
}
