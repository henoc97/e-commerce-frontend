import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
@injectable()
export class GetByIdOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<OrderItem | null>.
     */
    async execute(id: number): Promise<OrderItem | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
