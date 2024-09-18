import { UserActivityService } from '../../services/user-activity.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
export class UpdateUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param activity - The UserActivity required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity>.
     */
    async execute(id: number, activity: UserActivity): Promise<UserActivity> {
        const result = await this.service.update(id, activity);

        return result;
    }
}
