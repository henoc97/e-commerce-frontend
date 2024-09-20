import { UserProfileService } from '../../services/user-profile.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for isPhoneInUse.
 * This class encapsulates the business logic for isPhoneInUse.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
@injectable()
export class IsPhoneInUseUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the isPhoneInUse use case.
     * @param phone - The string required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(phone: string): Promise<boolean> {
        const result = await this.service.isPhoneInUse(phone);

        return result;
    }
}
