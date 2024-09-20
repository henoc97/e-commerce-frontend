import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for removeVariant.
 * This class encapsulates the business logic for removeVariant.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class RemoveVariantProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the removeVariant use case.
     * @param productId - The number required by the service method.
     * @param variantId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, variantId: number): Promise<Product> {
        const result = await this.service.removeVariant(productId, variantId);

        return result;
    }
}
