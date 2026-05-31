import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkOrderDto } from './create-work-order.dto';
import { IsString, IsNotEmpty, IsInt, Min, IsEnum } from 'class-validator';
import { WorkOrderStatus } from 'src/common/enums/status.enum';

export class UpdateWorkOrderDto extends PartialType(CreateWorkOrderDto) {
  @IsString()
  @IsNotEmpty()
  orderNumber!: string;

  @IsString()
  @IsNotEmpty()
  productName!: string;

  @IsInt()
  @Min(1)
  quantityTarget!: number;

  @IsEnum(WorkOrderStatus)
  status!: WorkOrderStatus;
}
