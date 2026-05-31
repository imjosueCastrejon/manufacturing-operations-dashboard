import { IsNumberString, IsNotEmpty, IsInt, Min } from "class-validator";

export class CreateProductionMetricDto {
  @IsNumberString() // Validamos como string numérico ya que el ID de origen es BIGINT
  @IsNotEmpty()
  workOrderId!: string;

  @IsInt()
  @Min(1)
  unitsProduced!: number;
}
