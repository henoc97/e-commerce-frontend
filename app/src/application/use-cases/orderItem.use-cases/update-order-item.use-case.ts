import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
export class UpdateOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<OrderItem>.
     */
    async execute(id: number, updates: Partial<OrderItem>): Promise<OrderItem> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
