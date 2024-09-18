import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

/**
 * Use case class for removeSubsite.
 * This class encapsulates the business logic for removeSubsite.
 * It interacts with the User service to perform operations on the user repository.
 */
export class RemoveSubsiteUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the removeSubsite use case.
     * @param userId - The number required by the service method.
     * @param SubsiteId - The number required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, SubsiteId: number): Promise<User> {
        const result = await this.service.removeSubsite(userId, SubsiteId);

        return result;
    }
}
