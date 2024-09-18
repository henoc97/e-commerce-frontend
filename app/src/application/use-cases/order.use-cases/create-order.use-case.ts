import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class CreateOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the create use case.
     * @param order - The Order required by the service method.
     * @returns A promise with the service result of type Promise<Order>.
     */
    async execute(order: Order): Promise<Order> {
        const result = await this.service.create(order);

        return result;
    }
}
