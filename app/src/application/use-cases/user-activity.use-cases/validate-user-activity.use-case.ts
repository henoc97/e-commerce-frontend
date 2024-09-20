import { UserActivity } from '../../../domain/entities/user-activity.entity';
import { UserActivityService } from '../../services/user-activity.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for validate.
 * This class encapsulates the business logic for validate.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
@injectable()
export class ValidateUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the validate use case.
     * @param activity - The UserActivity required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(activity: UserActivity): Promise<boolean> {
        const result = await this.service.validate(activity);

        return result;
    }
}
