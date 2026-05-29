import { PartialType } from '@nestjs/mapped-types';
import { CreateQualityIssueDto } from './create-quality-issue.dto';

export class UpdateQualityIssueDto extends PartialType(CreateQualityIssueDto) {}
