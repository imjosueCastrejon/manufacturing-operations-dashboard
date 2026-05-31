import { QualityIssueSeverity, QualityIssueStatus } from 'src/common/enums/status.enum';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('quality_issues')
export class QualityIssue {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: string;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  area!: string;

  @Column({ type: 'text', enum: QualityIssueSeverity })
  severity!: QualityIssueSeverity;

  @Column({ type: 'text', enum: QualityIssueStatus })
  status!: QualityIssueStatus;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}
