import { Injectable } from '@nestjs/common';
import { CreateProductionMetricDto } from './dto/create-production-metric.dto';
import { UpdateProductionMetricDto } from './dto/update-production-metric.dto';

@Injectable()
export class ProductionMetricsService {
  create(createProductionMetricDto: CreateProductionMetricDto) {
    return 'This action adds a new productionMetric';
  }

  findAll() {
    return `This action returns all productionMetrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionMetric`;
  }

  update(id: number, updateProductionMetricDto: UpdateProductionMetricDto) {
    return `This action updates a #${id} productionMetric`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionMetric`;
  }
}
