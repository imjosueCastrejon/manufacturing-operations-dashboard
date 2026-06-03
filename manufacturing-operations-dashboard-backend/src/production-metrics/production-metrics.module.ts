import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionMetricsService } from './production-metrics.service';
import { ProductionMetricsController } from './production-metrics.controller';
import { ProductionMetric } from './entities/production-metric.entity';
import { WorkOrder } from '../work-orders/entities/work-order.entity';
import { QualityIssue } from '../quality-issues/entities/quality-issue.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductionMetric, WorkOrder, QualityIssue]),
  ],
  controllers: [ProductionMetricsController],
  providers: [ProductionMetricsService],
  exports: [ProductionMetricsService],
})
export class ProductionMetricsModule {}
