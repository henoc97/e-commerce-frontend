import { UserActivityService } from '../../services/user-activity.service';

/**
 * Use case class for countByUser.
 * This class encapsulates the business logic for countByUser.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
export class CountByUserUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the countByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(userId: number): Promise<number> {
        const result = await this.service.countByUser(userId);

        return result;
    }
}
