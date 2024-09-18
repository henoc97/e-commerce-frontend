import { UserProfileService } from '../../services/user-profile.service';

/**
 * Use case class for exists.
 * This class encapsulates the business logic for exists.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class ExistsUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the exists use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(userId: number): Promise<boolean> {
        const result = await this.service.exists(userId);

        return result;
    }
}
