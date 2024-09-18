import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for getByShopId.
 * This class encapsulates the business logic for getByShopId.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class GetByShopIdOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getByShopId use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(shopId: number): Promise<Order[]> {
        const result = await this.service.getByShopId(shopId);

        return result;
    }
}
