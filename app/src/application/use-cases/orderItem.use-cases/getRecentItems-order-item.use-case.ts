import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

/**
 * Use case class for getRecentItems.
 * This class encapsulates the business logic for getRecentItems.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
export class GetRecentItemsOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the getRecentItems use case.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<OrderItem[]>.
     */
    async execute(orderId: number): Promise<OrderItem[]> {
        const result = await this.service.getRecentItems(orderId);

        return result;
    }
}
