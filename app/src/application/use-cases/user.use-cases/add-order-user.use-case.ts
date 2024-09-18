import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for addOrder.
 * This class encapsulates the business logic for addOrder.
 * It interacts with the User service to perform operations on the user repository.
 */
export class AddOrderUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the addOrder use case.
     * @param userId - The number required by the service method.
     * @param order - The Order required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, order: Order): Promise<User> {
        const result = await this.service.addOrder(userId, order);

        return result;
    }
}
