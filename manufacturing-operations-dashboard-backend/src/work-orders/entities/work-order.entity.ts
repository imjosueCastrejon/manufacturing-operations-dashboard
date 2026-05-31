import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { WorkOrderStatus } from '../../common/enums/status.enum';
import { ProductionMetric } from '../../production-metrics/entities/production-metric.entity';

@Entity('work_orders')
export class WorkOrder {
  
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: string; // BIGINT se maneja como string en TS para evitar pérdida de precisión

  
  @Column({ name: 'order_number', type: 'text', unique: true })
  orderNumber!: string;

  @Column({ name: 'product_name', type: 'text' })
  productName!: string;

  @Column({ name: 'quantity_target', type: 'integer' })
  quantityTarget!: number;

  @Column({
    type: 'text',
    enum: WorkOrderStatus,
  })
  status!: WorkOrderStatus;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;

  
  @OneToMany(() => ProductionMetric, (metric) => metric.workOrder)
  metrics!: ProductionMetric[];
}