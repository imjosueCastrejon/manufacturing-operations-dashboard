import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQualityIssueDto } from './dto/create-quality-issue.dto';
import { UpdateQualityIssueDto } from './dto/update-quality-issue.dto';
import { QualityIssue } from './entities/quality-issue.entity';
import {
  QualityIssueStatus,
  QualityIssueSeverity,
} from 'src/common/enums/status.enum';

@Injectable()
export class QualityIssuesService {
  constructor(
    @InjectRepository(QualityIssue)
    private readonly qualityIssueRepository: Repository<QualityIssue>,
  ) {}

  async create(
    createQualityIssueDto: CreateQualityIssueDto,
  ): Promise<QualityIssue> {
    const qualityIssue = this.qualityIssueRepository.create(
      createQualityIssueDto,
    );
    return await this.qualityIssueRepository.save(qualityIssue);
  }

  async findAll(
    status?: QualityIssueStatus,
    severity?: QualityIssueSeverity,
  ): Promise<QualityIssue[]> {
    return await this.qualityIssueRepository.find({
      where: {
        ...(status && { status }),
        ...(severity && { severity }),
      },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<QualityIssue> {
    const qualityIssue = await this.qualityIssueRepository.findOneBy({ id });
    if (!qualityIssue) {
      throw new NotFoundException(`Quality Issue with ID ${id} not found`);
    }
    return qualityIssue;
  }

  async update(
    id: string,
    updateQualityIssueDto: UpdateQualityIssueDto,
  ): Promise<QualityIssue> {
    const qualityIssue = await this.findOne(id);
    const updatedQualityIssue = this.qualityIssueRepository.merge(
      qualityIssue,
      updateQualityIssueDto,
    );
    return await this.qualityIssueRepository.save(updatedQualityIssue);
  }

  async remove(id: string): Promise<void> {
    const qualityIssue = await this.findOne(id);
    await this.qualityIssueRepository.remove(qualityIssue);
  }
}
