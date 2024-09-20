import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByProductId.
 * This class encapsulates the business logic for getByProductId.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
@injectable()
export class GetByProductIdOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the getByProductId use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<OrderItem[]>.
     */
    async execute(productId: number): Promise<OrderItem[]> {
        const result = await this.service.getByProductId(productId);

        return result;
    }
}
