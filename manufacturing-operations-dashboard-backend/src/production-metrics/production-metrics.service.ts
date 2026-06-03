import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, MoreThanOrEqual, Repository } from 'typeorm';
import { ProductionMetric } from './entities/production-metric.entity';
import { WorkOrder } from '../work-orders/entities/work-order.entity';
import { QualityIssue } from '../quality-issues/entities/quality-issue.entity';
import {
  QualityIssueStatus,
  WorkOrderStatus,
} from '../common/enums/status.enum';

@Injectable()
export class ProductionMetricsService {
  constructor(
    @InjectRepository(ProductionMetric)
    private readonly productionMetricRepository: Repository<ProductionMetric>,
    @InjectRepository(WorkOrder)
    private readonly workOrderRepository: Repository<WorkOrder>,
    @InjectRepository(QualityIssue)
    private readonly qualityIssueRepository: Repository<QualityIssue>,
  ) {}

  async getDashboardMetrics() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // 1 & 2. Work Orders counts
    const activeWorkOrders = await this.workOrderRepository.count({
      where: { status: WorkOrderStatus.IN_PROGRESS },
    });

    const completedWorkOrders = await this.workOrderRepository.count({
      where: { status: WorkOrderStatus.COMPLETED },
    });

    // 3. Open Quality Issues
    const openQualityIssues = await this.qualityIssueRepository.count({
      where: {
        status: In([QualityIssueStatus.OPEN, QualityIssueStatus.IN_PROGRESS]),
      },
    });

    // 4 & 6. Daily Production and Quality Rate
    const productionTodayResult = await this.productionMetricRepository
      .createQueryBuilder('metric')
      .select('SUM(metric.unitsProduced)', 'total')
      .where('metric.recordedAt >= :today', { today })
      .getRawOne();

    const dailyProductionOutput = Number(productionTodayResult?.total || 0);

    const issuesToday = await this.qualityIssueRepository.count({
      where: { createdAt: MoreThanOrEqual(today) },
    });

    let qualityRate = 100;
    if (dailyProductionOutput > 0) {
      const calculatedRate =
        ((dailyProductionOutput - issuesToday * 10) / dailyProductionOutput) *
        100;
      qualityRate = Math.max(0, Math.round(calculatedRate));
    }

    // 5. Production Efficiency
    const efficiencyStats = await this.workOrderRepository
      .createQueryBuilder('workOrder')
      .select('SUM(workOrder.quantityTarget)', 'totalTarget')
      .leftJoin('workOrder.metrics', 'metric')
      .addSelect('SUM(metric.unitsProduced)', 'totalProduced')
      .getRawOne();

    const totalProduced = Number(efficiencyStats?.totalProduced || 0);
    const totalTarget = Number(efficiencyStats?.totalTarget || 0);
    const productionEfficiency =
      totalTarget > 0 ? Math.round((totalProduced / totalTarget) * 100) : 0;

    return {
      activeWorkOrders,
      completedWorkOrders,
      openQualityIssues,
      productionEfficiency,
      dailyProductionOutput,
      qualityRate,
    };
  }
}
