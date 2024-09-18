import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

/**
 * Use case class for getInactiveUsers.
 * This class encapsulates the business logic for getInactiveUsers.
 * It interacts with the User service to perform operations on the user repository.
 */
export class GetInactiveUsersUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getInactiveUsers use case.
     * @param days - The number required by the service method.
     * @returns A promise with the service result of type Promise<User[]>.
     */
    async execute(days: number): Promise<User[]> {
        const result = await this.service.getInactiveUsers(days);

        return result;
    }
}
