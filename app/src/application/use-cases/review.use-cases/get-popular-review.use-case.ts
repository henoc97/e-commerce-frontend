import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getPopular.
 * This class encapsulates the business logic for getPopular.
 * It interacts with the Review service to perform operations on the review repository.
 */
@injectable()
export class GetPopularReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getPopular use case.
     * @param limit - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(limit: number): Promise<Review[]> {
        const result = await this.service.getPopular(limit);

        return result;
    }
}
