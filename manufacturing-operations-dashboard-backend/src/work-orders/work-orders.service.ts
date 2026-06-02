import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkOrderDto } from './dto/create-work-order.dto';
import { UpdateWorkOrderDto } from './dto/update-work-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { WorkOrder } from './entities/work-order.entity';
import { WorkOrderStatus } from '../common/enums/status.enum';

@Injectable()
export class WorkOrdersService {
  constructor(
    @InjectRepository(WorkOrder)
    private readonly workOrdersRepository: Repository<WorkOrder>,
  ) {}

  async create(createWorkOrderDto: CreateWorkOrderDto): Promise<WorkOrder> {
    const workOrder = this.workOrdersRepository.create(createWorkOrderDto);
    return await this.workOrdersRepository.save(workOrder);
  }

  async findAll(
    status?: WorkOrderStatus,
    orderNumber?: string,
  ): Promise<WorkOrder[]> {
    return await this.workOrdersRepository.find({
      where: {
        ...(status && { status }),
        ...(orderNumber && { orderNumber: ILike(`%${orderNumber}%`) }),
      },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<WorkOrder> {
    const workOrder = await this.workOrdersRepository.findOneBy({ id });
    if (!workOrder) {
      throw new NotFoundException(`Work Order with ID ${id} not found`);
    }
    return workOrder;
  }

  async update(
    id: string,
    updateWorkOrderDto: UpdateWorkOrderDto,
  ): Promise<WorkOrder> {
    const workOrder = await this.findOne(id);
    const updatedWorkOrder = this.workOrdersRepository.merge(
      workOrder,
      updateWorkOrderDto,
    );
    return await this.workOrdersRepository.save(updatedWorkOrder);
  }

  async remove(id: string): Promise<void> {
    const workOrder = await this.findOne(id);
    await this.workOrdersRepository.remove(workOrder);
  }
}
