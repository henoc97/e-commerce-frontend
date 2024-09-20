import { ProductVariantService } from '../../services/product-variant.service';
import { ProductVariant } from '../../../domain/entities/product-variant.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByName.
 * This class encapsulates the business logic for getByName.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
@injectable()
export class GetByNameProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the getByName use case.
     * @param productId - The number required by the service method.
     * @param name - The string required by the service method.
     * @returns A promise with the service result of type Promise<ProductVariant[]>.
     */
    async execute(productId: number, name: string): Promise<ProductVariant[]> {
        const result = await this.service.getByName(productId, name);

        return result;
    }
}
