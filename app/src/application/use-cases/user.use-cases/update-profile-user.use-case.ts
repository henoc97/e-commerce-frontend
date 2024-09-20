import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for updateProfile.
 * This class encapsulates the business logic for updateProfile.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class UpdateProfileUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the updateProfile use case.
     * @param userId - The number required by the service method.
     * @param profile - The UserProfile required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, profile: UserProfile): Promise<User> {
        const result = await this.service.updateProfile(userId, profile);

        return result;
    }
}
