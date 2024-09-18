import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

/**
 * Use case class for getByGender.
 * This class encapsulates the business logic for getByGender.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
export class GetByGenderUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the getByGender use case.
     * @param gender - The string required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile[]>.
     */
    async execute(gender: string): Promise<UserProfile[]> {
        const result = await this.service.getByGender(gender);

        return result;
    }
}
