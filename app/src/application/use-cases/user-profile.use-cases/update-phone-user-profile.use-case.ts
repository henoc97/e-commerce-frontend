import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

/**
 * Use case class for updatePhone.
 * This class encapsulates the business logic for updatePhone.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class UpdatePhoneUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the updatePhone use case.
     * @param userId - The number required by the service method.
     * @param phone - The string required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile>.
     */
    async execute(userId: number, phone: string): Promise<UserProfile> {
        const result = await this.service.updatePhone(userId, phone);

        return result;
    }
}
