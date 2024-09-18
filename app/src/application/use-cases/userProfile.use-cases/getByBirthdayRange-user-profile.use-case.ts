import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

/**
 * Use case class for getByBirthdayRange.
 * This class encapsulates the business logic for getByBirthdayRange.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class GetByBirthdayRangeUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the getByBirthdayRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile[]>.
     */
    async execute(startDate: Date, endDate: Date): Promise<UserProfile[]> {
        const result = await this.service.getByBirthdayRange(
            startDate,
            endDate
        );

        return result;
    }
}
