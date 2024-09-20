import { OrderItemService } from '../../services/order-item.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for calculateTotalPrice.
 * This class encapsulates the business logic for calculateTotalPrice.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
@injectable()
export class CalculateTotalPriceOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the calculateTotalPrice use case.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(orderId: number): Promise<number> {
        const result = await this.service.calculateTotalPrice(orderId);

        return result;
    }
}
