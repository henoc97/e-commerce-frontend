import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getLowStockItems.
 * This class encapsulates the business logic for getLowStockItems.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
@injectable()
export class GetLowStockItemsOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the getLowStockItems use case.
     * @param threshold - The number required by the service method.
     * @returns A promise with the service result of type Promise<OrderItem[]>.
     */
    async execute(threshold: number): Promise<OrderItem[]> {
        const result = await this.service.getLowStockItems(threshold);

        return result;
    }
}
