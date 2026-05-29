import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QualityIssuesService } from './quality-issues.service';
import { CreateQualityIssueDto } from './dto/create-quality-issue.dto';
import { UpdateQualityIssueDto } from './dto/update-quality-issue.dto';

@Controller('quality-issues')
export class QualityIssuesController {
  constructor(private readonly qualityIssuesService: QualityIssuesService) {}

  @Post()
  create(@Body() createQualityIssueDto: CreateQualityIssueDto) {
    return this.qualityIssuesService.create(createQualityIssueDto);
  }

  @Get()
  findAll() {
    return this.qualityIssuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qualityIssuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQualityIssueDto: UpdateQualityIssueDto) {
    return this.qualityIssuesService.update(+id, updateQualityIssueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qualityIssuesService.remove(+id);
  }
}
