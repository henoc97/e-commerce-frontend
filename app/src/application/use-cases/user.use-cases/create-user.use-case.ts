import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the User service to perform operations on the user repository.
 */
export class CreateUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the create use case.
     * @param user - The User required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(user: User): Promise<User> {
        const result = await this.service.create(user);

        return result;
    }
}
