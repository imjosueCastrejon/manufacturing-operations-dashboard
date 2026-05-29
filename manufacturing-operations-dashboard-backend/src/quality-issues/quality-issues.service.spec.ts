import { Test, TestingModule } from '@nestjs/testing';
import { QualityIssuesService } from './quality-issues.service';

describe('QualityIssuesService', () => {
  let service: QualityIssuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QualityIssuesService],
    }).compile();

    service = module.get<QualityIssuesService>(QualityIssuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
