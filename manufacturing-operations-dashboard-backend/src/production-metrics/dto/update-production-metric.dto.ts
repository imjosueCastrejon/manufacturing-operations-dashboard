import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionMetricDto } from './create-production-metric.dto';

export class UpdateProductionMetricDto extends PartialType(CreateProductionMetricDto) {}
