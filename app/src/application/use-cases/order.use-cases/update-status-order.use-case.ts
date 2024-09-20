import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';
import { OrderStatus } from '@/app/src/domain/enums/order-status.enum';

import { injectable } from 'tsyringe';
/**
 * Use case class for updateStatus.
 * This class encapsulates the business logic for updateStatus.
 * It interacts with the Order service to perform operations on the order repository.
 */
@injectable()
export class UpdateStatusOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the updateStatus use case.
     * @param id - The number required by the service method.
     * @param status - The OrderStatus required by the service method.
     * @returns A promise with the service result of type Promise<Order>.
     */
    async execute(id: number, status: OrderStatus): Promise<Order> {
        const result = await this.service.updateStatus(id, status);

        return result;
    }
}
