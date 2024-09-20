import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';
import { ProductVariant } from '../../../domain/entities/product-variant.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addVariant.
 * This class encapsulates the business logic for addVariant.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class AddVariantProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the addVariant use case.
     * @param productId - The number required by the service method.
     * @param variant - The ProductVariant required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(
        productId: number,
        variant: ProductVariant
    ): Promise<Product> {
        const result = await this.service.addVariant(productId, variant);

        return result;
    }
}
