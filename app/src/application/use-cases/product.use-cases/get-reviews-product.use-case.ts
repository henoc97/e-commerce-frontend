import { Review } from '../../../domain/entities/review.entity';
import { ProductService } from '../../services/product.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getReviews.
 * This class encapsulates the business logic for getReviews.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class GetReviewsProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the getReviews use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Review[]>.
     */
    async execute(productId: number): Promise<Review[]> {
        const result = await this.service.getReviews(productId);

        return result;
    }
}
