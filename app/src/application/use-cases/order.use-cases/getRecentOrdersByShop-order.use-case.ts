import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for getRecentOrdersByShop.
 * This class encapsulates the business logic for getRecentOrdersByShop.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class GetRecentOrdersByShopOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getRecentOrdersByShop use case.
     * @param shopId - The number required by the service method.
     * @param limit - The number required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(shopId: number, limit: number): Promise<Order[]> {
        const result = await this.service.getRecentOrdersByShop(shopId, limit);

        return result;
    }
}
