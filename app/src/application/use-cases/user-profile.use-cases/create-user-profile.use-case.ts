import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
@injectable()
export class CreateUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the create use case.
     * @param profile - The UserProfile required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile>.
     */
    async execute(profile: UserProfile): Promise<UserProfile> {
        const result = await this.service.create(profile);

        return result;
    }
}
