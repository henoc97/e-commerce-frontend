import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

/**
 * Use case class for getByUserId.
 * This class encapsulates the business logic for getByUserId.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class GetByUserIdUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the getByUserId use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile | null>.
     */
    async execute(userId: number): Promise<UserProfile | null> {
        const result = await this.service.getByUserId(userId);

        if (!result) return null;

        return result;
    }
}
