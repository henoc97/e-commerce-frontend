import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for verify.
 * This class encapsulates the business logic for verify.
 * It interacts with the Review service to perform operations on the review repository.
 */
@injectable()
export class VerifyReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the verify use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review>.
     */
    async execute(id: number): Promise<Review> {
        const result = await this.service.verify(id);

        return result;
    }
}
