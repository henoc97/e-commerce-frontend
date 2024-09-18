import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

/**
 * Use case class for modify.
 * This class encapsulates the business logic for modify.
 * It interacts with the Review service to perform operations on the review repository.
 */
export class ModifyReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the modify use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Review>.
     */
    async execute(id: number, updates: Partial<Review>): Promise<Review> {
        const result = await this.service.modify(id, updates);

        return result;
    }
}
