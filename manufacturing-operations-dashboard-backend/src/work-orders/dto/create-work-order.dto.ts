import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { WorkOrderStatus } from '../../common/enums/status.enum';

export class CreateWorkOrderDto {
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
