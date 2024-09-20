import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class UpdateUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(id: number, updates: Partial<User>): Promise<User> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
