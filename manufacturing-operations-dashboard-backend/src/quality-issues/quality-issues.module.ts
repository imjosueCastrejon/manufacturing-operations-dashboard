import { Module } from '@nestjs/common';
import { QualityIssuesService } from './quality-issues.service';
import { QualityIssuesController } from './quality-issues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityIssue } from './entities/quality-issue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QualityIssue])],
  controllers: [QualityIssuesController],
  providers: [QualityIssuesService],
})
export class QualityIssuesModule {}
