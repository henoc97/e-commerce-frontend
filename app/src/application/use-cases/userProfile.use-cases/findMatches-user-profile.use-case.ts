import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

/**
 * Use case class for findMatches.
 * This class encapsulates the business logic for findMatches.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class FindMatchesUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the findMatches use case.
     * @param criteria - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile[]>.
     */
    async execute(criteria: Partial<UserProfile>): Promise<UserProfile[]> {
        const result = await this.service.findMatches(criteria);

        return result;
    }
}
