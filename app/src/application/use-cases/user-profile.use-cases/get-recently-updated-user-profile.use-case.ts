import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getRecentlyUpdated.
 * This class encapsulates the business logic for getRecentlyUpdated.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
@injectable()
export class GetRecentlyUpdatedUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the getRecentlyUpdated use case.
     * @param limit - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile[]>.
     */
    async execute(limit: number): Promise<UserProfile[]> {
        const result = await this.service.getRecentlyUpdated(limit);

        return result;
    }
}
