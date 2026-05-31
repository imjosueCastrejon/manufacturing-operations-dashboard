import { IsString, IsNotEmpty, IsEnum } from "class-validator";
import { QualityIssueSeverity, QualityIssueStatus } from "src/common/enums/status.enum";

export class CreateQualityIssueDto {
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
