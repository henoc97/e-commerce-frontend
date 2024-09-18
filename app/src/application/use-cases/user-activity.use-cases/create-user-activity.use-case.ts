import { UserActivityService } from '../../services/user-activity.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
export class CreateUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the create use case.
     * @param activity - The UserActivity required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity>.
     */
    async execute(activity: UserActivity): Promise<UserActivity> {
        const result = await this.service.create(activity);

        return result;
    }
}
