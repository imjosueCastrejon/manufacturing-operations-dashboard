import { PartialType } from '@nestjs/mapped-types';
import { CreateQualityIssueDto } from './create-quality-issue.dto';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { QualityIssueSeverity, QualityIssueStatus } from 'src/common/enums/status.enum';

export class UpdateQualityIssueDto extends PartialType(CreateQualityIssueDto) {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  area!: string;

  @IsEnum(QualityIssueSeverity)
  severity!: QualityIssueSeverity;

  @IsEnum(QualityIssueStatus)
  status!: QualityIssueStatus;
}
