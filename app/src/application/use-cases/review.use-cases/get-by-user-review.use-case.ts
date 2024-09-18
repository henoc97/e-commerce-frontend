import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

/**
 * Use case class for getByUser.
 * This class encapsulates the business logic for getByUser.
 * It interacts with the Review service to perform operations on the review repository.
 */
export class GetByUserReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(userId: number): Promise<Review[]> {
        const result = await this.service.getByUser(userId);

        return result;
    }
}
