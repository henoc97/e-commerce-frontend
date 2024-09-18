import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

/**
 * Use case class for getByProduct.
 * This class encapsulates the business logic for getByProduct.
 * It interacts with the Review service to perform operations on the review repository.
 */
export class GetByProductReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getByProduct use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(productId: number): Promise<Review[]> {
        const result = await this.service.getByProduct(productId);

        return result;
    }
}
