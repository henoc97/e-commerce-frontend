import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

/**
 * Use case class for updateBirthday.
 * This class encapsulates the business logic for updateBirthday.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class UpdateBirthdayUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the updateBirthday use case.
     * @param userId - The number required by the service method.
     * @param birthday - The Date required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile>.
     */
    async execute(userId: number, birthday: Date): Promise<UserProfile> {
        const result = await this.service.updateBirthday(userId, birthday);

        return result;
    }
}
