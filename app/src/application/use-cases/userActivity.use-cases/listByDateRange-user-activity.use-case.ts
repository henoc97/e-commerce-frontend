import { UserActivityService } from '../../services/user-activity.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

/**
 * Use case class for listByDateRange.
 * This class encapsulates the business logic for listByDateRange.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
export class ListByDateRangeUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the listByDateRange use case.
     * @param start - The Date required by the service method.
     * @param end - The Date required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity[]>.
     */
    async execute(start: Date, end: Date): Promise<UserActivity[]> {
        const result = await this.service.listByDateRange(start, end);

        return result;
    }
}
