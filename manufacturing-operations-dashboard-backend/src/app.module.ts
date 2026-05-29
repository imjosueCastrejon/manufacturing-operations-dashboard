import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkOrdersModule } from './work-orders/work-orders.module';
import { QualityIssuesModule } from './quality-issues/quality-issues.module';
import { ProductionMetricsModule } from './production-metrics/production-metrics.module';

@Module({
  imports: [WorkOrdersModule, QualityIssuesModule, ProductionMetricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
