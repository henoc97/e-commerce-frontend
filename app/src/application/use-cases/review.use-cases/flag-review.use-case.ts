import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

/**
 * Use case class for flag.
 * This class encapsulates the business logic for flag.
 * It interacts with the Review service to perform operations on the review repository.
 */
export class FlagReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the flag use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review>.
     */
    async execute(id: number): Promise<Review> {
        const result = await this.service.flag(id);

        return result;
    }
}
