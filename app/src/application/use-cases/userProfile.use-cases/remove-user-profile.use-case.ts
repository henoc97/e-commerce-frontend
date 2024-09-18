import { UserProfileService } from '../../services/user-profile.service';

/**
 * Use case class for remove.
 * This class encapsulates the business logic for remove.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class RemoveUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the remove use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.remove(id);

        return result;
    }
}
