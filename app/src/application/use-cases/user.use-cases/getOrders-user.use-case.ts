import { Order } from '../../../domain/entities/order.entity';
import { UserService } from '../../services/user.service';

/**
 * Use case class for getOrders.
 * This class encapsulates the business logic for getOrders.
 * It interacts with the User service to perform operations on the user repository.
 */
export class GetOrdersUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getOrders use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(userId: number): Promise<Order[]> {
        const result = await this.service.getOrders(userId);

        return result;
    }
}
