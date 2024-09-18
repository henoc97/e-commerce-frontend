import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Review service to perform operations on the review repository.
 */
export class CreateReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the create use case.
     * @param review - The Review required by the service method.
     * @returns A promise with the service result of type Promise<Review>.
     */
    async execute(review: Review): Promise<Review> {
        const result = await this.service.create(review);

        return result;
    }
}
