import { ProductVariantService } from '../../services/product-variant.service';
import { ProductVariant } from '../../../domain/entities/product-variant.entity';

/**
 * Use case class for getMostPopularVariant.
 * This class encapsulates the business logic for getMostPopularVariant.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
export class GetMostPopularVariantProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the getMostPopularVariant use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<ProductVariant | null>.
     */
    async execute(productId: number): Promise<ProductVariant | null> {
        const result = await this.service.getMostPopularVariant(productId);

        if (!result) return null;

        return result;
    }
}
