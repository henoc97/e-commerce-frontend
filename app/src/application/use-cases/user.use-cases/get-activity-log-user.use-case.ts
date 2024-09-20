import { UserService } from '../../services/user.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getActivityLog.
 * This class encapsulates the business logic for getActivityLog.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetActivityLogUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getActivityLog use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity[]>.
     */
    async execute(userId: number): Promise<UserActivity[]> {
        const result = await this.service.getActivityLog(userId);

        return result;
    }
}
