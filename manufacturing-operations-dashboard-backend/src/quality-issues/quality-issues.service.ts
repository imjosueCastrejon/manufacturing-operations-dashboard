import { Injectable } from '@nestjs/common';
import { CreateQualityIssueDto } from './dto/create-quality-issue.dto';
import { UpdateQualityIssueDto } from './dto/update-quality-issue.dto';

@Injectable()
export class QualityIssuesService {
  create(createQualityIssueDto: CreateQualityIssueDto) {
    return 'This action adds a new qualityIssue';
  }

  findAll() {
    return `This action returns all qualityIssues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qualityIssue`;
  }

  update(id: number, updateQualityIssueDto: UpdateQualityIssueDto) {
    return `This action updates a #${id} qualityIssue`;
  }

  remove(id: number) {
    return `This action removes a #${id} qualityIssue`;
  }
}
