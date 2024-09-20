import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';
import { Review } from '../../../domain/entities/review.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addReview.
 * This class encapsulates the business logic for addReview.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class AddReviewProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the addReview use case.
     * @param productId - The number required by the service method.
     * @param review - The Review required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, review: Review): Promise<Product> {
        const result = await this.service.addReview(productId, review);

        return result;
    }
}
