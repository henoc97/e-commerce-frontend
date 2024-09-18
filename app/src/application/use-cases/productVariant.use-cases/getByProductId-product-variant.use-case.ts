import { ProductVariantService } from '../../services/product-variant.service';
import { ProductVariant } from '../../../domain/entities/product-variant.entity';

/**
 * Use case class for getByProductId.
 * This class encapsulates the business logic for getByProductId.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
export class GetByProductIdProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the getByProductId use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<ProductVariant[]>.
     */
    async execute(productId: number): Promise<ProductVariant[]> {
        const result = await this.service.getByProductId(productId);

        return result;
    }
}
