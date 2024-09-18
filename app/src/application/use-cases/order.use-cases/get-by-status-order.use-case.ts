import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';
import { OrderStatus } from '../../../domain/enums/order-status.enum';

/**
 * Use case class for getByStatus.
 * This class encapsulates the business logic for getByStatus.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class GetByStatusOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getByStatus use case.
     * @param status - The OrderStatus required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(status: OrderStatus): Promise<Order[]> {
        const result = await this.service.getByStatus(status);

        return result;
    }
}
