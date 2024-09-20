import { UserActivityService } from '../../services/user-activity.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for listByUser.
 * This class encapsulates the business logic for listByUser.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
@injectable()
export class ListByUserUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the listByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity[]>.
     */
    async execute(userId: number): Promise<UserActivity[]> {
        const result = await this.service.listByUser(userId);

        return result;
    }
}
