import { ProductVariantService } from '../../services/product-variant.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for exists.
 * This class encapsulates the business logic for exists.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
@injectable()
export class ExistsProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the exists use case.
     * @param productId - The number required by the service method.
     * @param name - The string required by the service method.
     * @param value - The string required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(
        productId: number,
        name: string,
        value: string
    ): Promise<boolean> {
        const result = await this.service.exists(productId, name, value);

        return result;
    }
}
