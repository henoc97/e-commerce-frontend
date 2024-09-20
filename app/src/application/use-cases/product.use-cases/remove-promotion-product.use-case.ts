import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for removePromotion.
 * This class encapsulates the business logic for removePromotion.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class RemovePromotionProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the removePromotion use case.
     * @param productId - The number required by the service method.
     * @param promotionId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, promotionId: number): Promise<Product> {
        const result = await this.service.removePromotion(
            productId,
            promotionId
        );

        return result;
    }
}
