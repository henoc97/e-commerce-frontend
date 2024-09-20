import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';
import { Promotion } from '../../../domain/entities/promotion.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addPromotion.
 * This class encapsulates the business logic for addPromotion.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class AddPromotionProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the addPromotion use case.
     * @param productId - The number required by the service method.
     * @param promotion - The Promotion required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, promotion: Promotion): Promise<Product> {
        const result = await this.service.addPromotion(productId, promotion);

        return result;
    }
}
