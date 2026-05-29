import { Test, TestingModule } from '@nestjs/testing';
import { ProductionMetricsController } from './production-metrics.controller';
import { ProductionMetricsService } from './production-metrics.service';

describe('ProductionMetricsController', () => {
  let controller: ProductionMetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductionMetricsController],
      providers: [ProductionMetricsService],
    }).compile();

    controller = module.get<ProductionMetricsController>(ProductionMetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
