import { Module } from '@nestjs/common';
import { QualityIssuesService } from './quality-issues.service';
import { QualityIssuesController } from './quality-issues.controller';

@Module({
  controllers: [QualityIssuesController],
  providers: [QualityIssuesService],
})
export class QualityIssuesModule {}
