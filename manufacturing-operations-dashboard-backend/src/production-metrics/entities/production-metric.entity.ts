import { WorkOrder } from "src/work-orders/entities/work-order.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('production_metrics')
export class ProductionMetric {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: string;

  @Column({ name: 'work_order_id', type: 'bigint' })
  workOrderId!: string;

  @Column({ name: 'units_produced', type: 'integer' })
  unitsProduced!: number;

  @CreateDateColumn({ name: 'recorded_at', type: 'timestamptz' })
  recordedAt!: Date;

  // Relación Muchos a Uno con WorkOrders (ON DELETE CASCADE)
  @ManyToOne(() => WorkOrder, (workOrder) => workOrder.metrics, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'work_order_id' })
  workOrder!: WorkOrder;
}