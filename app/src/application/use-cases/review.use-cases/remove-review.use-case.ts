import { ReviewService } from '../../services/review.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for remove.
 * This class encapsulates the business logic for remove.
 * It interacts with the Review service to perform operations on the review repository.
 */
@injectable()
export class RemoveReview {
    constructor(private readonly service: ReviewService) {}

    /**
     * Execute the remove use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.remove(id);

        return result;
    }
}
