import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkOrdersModule } from './work-orders/work-orders.module';
import { QualityIssuesModule } from './quality-issues/quality-issues.module';
import { ProductionMetricsModule } from './production-metrics/production-metrics.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    WorkOrdersModule,
    QualityIssuesModule,
    ProductionMetricsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: '',
      database: 'manufacturing_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
