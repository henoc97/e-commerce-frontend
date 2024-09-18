import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

/**
 * Use case class for getByDateRange.
 * This class encapsulates the business logic for getByDateRange.
 * It interacts with the Review service to perform operations on the review repository.
 */
export class GetByDateRangeReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getByDateRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(startDate: Date, endDate: Date): Promise<Review[]> {
        const result = await this.service.getByDateRange(startDate, endDate);

        return result;
    }
}
