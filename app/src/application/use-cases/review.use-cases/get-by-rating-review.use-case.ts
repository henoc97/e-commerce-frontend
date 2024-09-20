import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByRating.
 * This class encapsulates the business logic for getByRating.
 * It interacts with the Review service to perform operations on the review repository.
 */
@injectable()
export class GetByRatingReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getByRating use case.
     * @param rating - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(rating: number): Promise<Review[]> {
        const result = await this.service.getByRating(rating);

        return result;
    }
}
