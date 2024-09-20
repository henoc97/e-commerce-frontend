import { Order } from '../../../domain/entities/order.entity';
import { ShopService } from '../../services/shop.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for listOrders.
 * This class encapsulates the business logic for listOrders.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class ListOrdersShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the listOrders use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(shopId: number): Promise<Order[]> {
        const result = await this.service.listOrders(shopId);

        return result;
    }
}
