import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByUserId.
 * This class encapsulates the business logic for getByUserId.
 * It interacts with the Order service to perform operations on the order repository.
 */
@injectable()
export class GetByUserIdOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getByUserId use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(userId: number): Promise<Order[]> {
        const result = await this.service.getByUserId(userId);

        return result;
    }
}
