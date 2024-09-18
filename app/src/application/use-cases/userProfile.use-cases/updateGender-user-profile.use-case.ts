import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

/**
 * Use case class for updateGender.
 * This class encapsulates the business logic for updateGender.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class UpdateGenderUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the updateGender use case.
     * @param userId - The number required by the service method.
     * @param gender - The string required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile>.
     */
    async execute(userId: number, gender: string): Promise<UserProfile> {
        const result = await this.service.updateGender(userId, gender);

        return result;
    }
}
