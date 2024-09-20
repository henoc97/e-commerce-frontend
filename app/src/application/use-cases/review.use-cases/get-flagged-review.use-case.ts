import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getFlagged.
 * This class encapsulates the business logic for getFlagged.
 * It interacts with the Review service to perform operations on the review repository.
 */
@injectable()
export class GetFlaggedReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getFlagged use case.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(): Promise<Review[]> {
        const result = await this.service.getFlagged();

        return result;
    }
}
