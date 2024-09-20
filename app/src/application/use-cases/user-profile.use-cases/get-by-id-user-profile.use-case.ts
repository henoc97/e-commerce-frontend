import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../../domain/entities/user-profile.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the UserProfile service to perform operations on the userprofile repository.
 */
@injectable()
export class GetByIdUserProfile {
    constructor(private readonly service: UserProfileService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserProfile | null>.
     */
    async execute(id: number): Promise<UserProfile | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
