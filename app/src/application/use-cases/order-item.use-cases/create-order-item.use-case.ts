import { OrderItemService } from '../../services/order-item.service';
import { OrderItem } from '../../../domain/entities/order-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the OrderItem service to perform operations on the orderitem repository.
 */
@injectable()
export class CreateOrderItem {
    constructor(private readonly service: OrderItemService) {}

    /**
     * Execute the create use case.
     * @param item - The OrderItem required by the service method.
     * @returns A promise with the service result of type Promise<OrderItem>.
     */
    async execute(item: OrderItem): Promise<OrderItem> {
        const result = await this.service.create(item);

        return result;
    }
}
