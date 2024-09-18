import { UserActivityService } from '../../services/user-activity.service';
import { UserActivity } from '../../../domain/entities/user-activity.entity';

/**
 * Use case class for listByProduct.
 * This class encapsulates the business logic for listByProduct.
 * It interacts with the UserActivity service to perform operations on the useractivity repository.
 */
export class ListByProductUserActivity {
    constructor(private readonly service: UserActivityService) {}

    /**
     * Execute the listByProduct use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<UserActivity[]>.
     */
    async execute(productId: number): Promise<UserActivity[]> {
        const result = await this.service.listByProduct(productId);

        return result;
    }
}
