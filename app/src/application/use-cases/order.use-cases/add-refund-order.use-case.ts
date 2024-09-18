import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for addRefund.
 * This class encapsulates the business logic for addRefund.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class AddRefundOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the addRefund use case.
     * @param orderId - The number required by the service method.
     * @param refundId - The string required by the service method.
     * @returns A promise with the service result of type Promise<Order>.
     */
    async execute(orderId: number, refundId: string): Promise<Order> {
        const result = await this.service.addRefund(orderId, refundId);

        return result;
    }
}
