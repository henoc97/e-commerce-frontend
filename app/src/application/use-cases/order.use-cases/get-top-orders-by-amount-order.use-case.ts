import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for getTopOrdersByAmount.
 * This class encapsulates the business logic for getTopOrdersByAmount.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class GetTopOrdersByAmountOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getTopOrdersByAmount use case.
     * @param topN - The number required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(topN: number): Promise<Order[]> {
        const result = await this.service.getTopOrdersByAmount(topN);

        return result;
    }
}
