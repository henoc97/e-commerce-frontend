import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByEmail.
 * This class encapsulates the business logic for getByEmail.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetByEmailUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getByEmail use case.
     * @param email - The string required by the service method.
     * @returns A promise with the service result of type Promise<User | null>.
     */
    async execute(email: string): Promise<User | null> {
        const result = await this.service.getByEmail(email);

        if (!result) return null;

        return result;
    }
}
