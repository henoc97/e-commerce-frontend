import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';
import { Subsite } from '../../../domain/entities/subsite.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addSubsite.
 * This class encapsulates the business logic for addSubsite.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class AddSubsiteUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the addSubsite use case.
     * @param userId - The number required by the service method.
     * @param Subsite - The Subsite required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, Subsite: Subsite): Promise<User> {
        const result = await this.service.addSubsite(userId, Subsite);

        return result;
    }
}
