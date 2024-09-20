import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByRole.
 * This class encapsulates the business logic for getByRole.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetByRoleUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getByRole use case.
     * @param role - The UserRole required by the service method.
     * @returns A promise with the service result of type Promise<User[]>.
     */
    async execute(role: UserRole): Promise<User[]> {
        const result = await this.service.getByRole(role);

        return result;
    }
}
