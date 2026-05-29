import { Test, TestingModule } from '@nestjs/testing';
import { ProductionMetricsService } from './production-metrics.service';

describe('ProductionMetricsService', () => {
  let service: ProductionMetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductionMetricsService],
    }).compile();

    service = module.get<ProductionMetricsService>(ProductionMetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
