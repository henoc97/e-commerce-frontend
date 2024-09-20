import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getRecentItems.
 * This class encapsulates the business logic for getRecentItems.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
@injectable()
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
