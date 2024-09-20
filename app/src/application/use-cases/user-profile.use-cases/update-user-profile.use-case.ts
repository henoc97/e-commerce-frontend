import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
@injectable()
export class UpdateUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile>.
     */
    async execute(
        id: number,
        updates: Partial<UserProfile>
    ): Promise<UserProfile> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
