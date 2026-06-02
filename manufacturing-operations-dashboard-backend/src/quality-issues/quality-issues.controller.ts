import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { QualityIssuesService } from './quality-issues.service';
import { CreateQualityIssueDto } from './dto/create-quality-issue.dto';
import { UpdateQualityIssueDto } from './dto/update-quality-issue.dto';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import {
  QualityIssueStatus,
  QualityIssueSeverity,
} from 'src/common/enums/status.enum';

@ApiTags('Quality Issues')
@Controller('quality-issues')
export class QualityIssuesController {
  constructor(private readonly qualityIssuesService: QualityIssuesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new quality issue' })
  create(@Body() createQualityIssueDto: CreateQualityIssueDto) {
    return this.qualityIssuesService.create(createQualityIssueDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quality issues with optional filters' })
  @ApiQuery({ name: 'status', enum: QualityIssueStatus, required: false })
  @ApiQuery({ name: 'severity', enum: QualityIssueSeverity, required: false })
  findAll(
    @Query('status') status?: QualityIssueStatus,
    @Query('severity') severity?: QualityIssueSeverity,
  ) {
    return this.qualityIssuesService.findAll(status, severity);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quality issue by ID' })
  findOne(@Param('id') id: string) {
    return this.qualityIssuesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a quality issue' })
  update(
    @Param('id') id: string,
    @Body() updateQualityIssueDto: UpdateQualityIssueDto,
  ) {
    return this.qualityIssuesService.update(id, updateQualityIssueDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a quality issue' })
  remove(@Param('id') id: string) {
    return this.qualityIssuesService.remove(id);
  }
}
