import { UserActivityService } from '../../services/user-activity.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getRecentByUser.
 * This class encapsulates the business logic for getRecentByUser.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
@injectable()
export class GetRecentByUserUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the getRecentByUser use case.
     * @param userId - The number required by the service method.
     * @param limit - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity[]>.
     */
    async execute(userId: number, limit: number): Promise<UserActivity[]> {
        const result = await this.service.getRecentByUser(userId, limit);

        return result;
    }
}
