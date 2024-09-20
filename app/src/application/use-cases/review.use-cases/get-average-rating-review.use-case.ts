import { ReviewService } from '../../services/review.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getAverageRating.
 * This class encapsulates the business logic for getAverageRating.
 * It interacts with the Review service to perform operations on the review repository.
 */
@injectable()
export class GetAverageRatingReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getAverageRating use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(productId: number): Promise<number> {
        const result = await this.service.getAverageRating(productId);

        return result;
    }
}
