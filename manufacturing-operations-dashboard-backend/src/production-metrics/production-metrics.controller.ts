import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductionMetricsService } from './production-metrics.service';
import { CreateProductionMetricDto } from './dto/create-production-metric.dto';
import { UpdateProductionMetricDto } from './dto/update-production-metric.dto';

@Controller('production-metrics')
export class ProductionMetricsController {
  constructor(private readonly productionMetricsService: ProductionMetricsService) {}

  @Post()
  create(@Body() createProductionMetricDto: CreateProductionMetricDto) {
    return this.productionMetricsService.create(createProductionMetricDto);
  }

  @Get()
  findAll() {
    return this.productionMetricsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionMetricsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductionMetricDto: UpdateProductionMetricDto) {
    return this.productionMetricsService.update(+id, updateProductionMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionMetricsService.remove(+id);
  }
}
