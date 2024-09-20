import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Order service to perform operations on the order repository.
 */
@injectable()
export class UpdateOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Order>.
     */
    async execute(id: number, updates: Partial<Order>): Promise<Order> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
