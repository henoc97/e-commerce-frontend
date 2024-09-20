import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for updatePassword.
 * This class encapsulates the business logic for updatePassword.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class UpdatePasswordUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the updatePassword use case.
     * @param userId - The number required by the service method.
     * @param newPassword - The string required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, newPassword: string): Promise<User> {
        const result = await this.service.updatePassword(userId, newPassword);

        return result;
    }
}
