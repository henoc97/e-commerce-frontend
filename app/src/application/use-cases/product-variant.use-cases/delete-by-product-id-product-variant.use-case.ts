import { ProductVariantService } from '../../services/product-variant.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for deleteByProductId.
 * This class encapsulates the business logic for deleteByProductId.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
@injectable()
export class DeleteByProductIdProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the deleteByProductId use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(productId: number): Promise<boolean> {
        const result = await this.service.deleteByProductId(productId);

        return result;
    }
}
