import { UserActivityService } from '../../services/user-activity.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for findById.
 * This class encapsulates the business logic for findById.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
@injectable()
export class FindByIdUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the findById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity | null>.
     */
    async execute(id: number): Promise<UserActivity | null> {
        const result = await this.service.findById(id);

        if (!result) return null;

        return result;
    }
}
