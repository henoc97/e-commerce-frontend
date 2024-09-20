import { Review } from '../../../domain/entities/review.entity';
import { UserService } from '../../services/user.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getReviews.
 * This class encapsulates the business logic for getReviews.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetReviewsUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getReviews use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(userId: number): Promise<Review[]> {
        const result = await this.service.getReviews(userId);

        return result;
    }
}
