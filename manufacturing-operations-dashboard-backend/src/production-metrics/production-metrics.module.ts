import { Module } from '@nestjs/common';
import { ProductionMetricsService } from './production-metrics.service';
import { ProductionMetricsController } from './production-metrics.controller';

@Module({
  controllers: [ProductionMetricsController],
  providers: [ProductionMetricsService],
})
export class ProductionMetricsModule {}
