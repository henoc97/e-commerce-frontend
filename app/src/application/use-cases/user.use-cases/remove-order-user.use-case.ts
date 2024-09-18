import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

/**
 * Use case class for removeOrder.
 * This class encapsulates the business logic for removeOrder.
 * It interacts with the User service to perform operations on the user repository.
 */
export class RemoveOrderUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the removeOrder use case.
     * @param userId - The number required by the service method.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, orderId: number): Promise<User> {
        const result = await this.service.removeOrder(userId, orderId);

        return result;
    }
}
