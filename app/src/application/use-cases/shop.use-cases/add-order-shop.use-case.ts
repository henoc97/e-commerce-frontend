import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for addOrder.
 * This class encapsulates the business logic for addOrder.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class AddOrderShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the addOrder use case.
     * @param shopId - The number required by the service method.
     * @param order - The Order required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(shopId: number, order: Order): Promise<Shop> {
        const result = await this.service.addOrder(shopId, order);

        return result;
    }
}
