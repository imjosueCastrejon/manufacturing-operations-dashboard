import { Test, TestingModule } from '@nestjs/testing';
import { QualityIssuesController } from './quality-issues.controller';
import { QualityIssuesService } from './quality-issues.service';

describe('QualityIssuesController', () => {
  let controller: QualityIssuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QualityIssuesController],
      providers: [QualityIssuesService],
    }).compile();

    controller = module.get<QualityIssuesController>(QualityIssuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
