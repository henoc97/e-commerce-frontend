import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addPayment.
 * This class encapsulates the business logic for addPayment.
 * It interacts with the Order service to perform operations on the order repository.
 */
@injectable()
export class AddPaymentOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the addPayment use case.
     * @param orderId - The number required by the service method.
     * @param paymentId - The string required by the service method.
     * @returns A promise with the service result of type Promise<Order>.
     */
    async execute(orderId: number, paymentId: string): Promise<Order> {
        const result = await this.service.addPayment(orderId, paymentId);

        return result;
    }
}
