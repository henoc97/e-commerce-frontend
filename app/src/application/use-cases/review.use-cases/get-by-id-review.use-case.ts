import { ReviewService } from '../../services/review.service';
import { Review } from '../../../domain/entities/review.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Review service to perform operations on the review repository.
 */
export class GetByIdReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review | null>.
     */
    async execute(id: number): Promise<Review | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
