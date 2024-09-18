import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

/**
 * Use case class for getByOrderId.
 * This class encapsulates the business logic for getByOrderId.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
export class GetByOrderIdOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the getByOrderId use case.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<OrderItem[]>.
     */
    async execute(orderId: number): Promise<OrderItem[]> {
        const result = await this.service.getByOrderId(orderId);

        return result;
    }
}
