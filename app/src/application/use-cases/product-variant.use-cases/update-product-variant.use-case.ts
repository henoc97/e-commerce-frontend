import { ProductVariantService } from '../../services/product-variant.service';
import { ProductVariant } from '../../../domain/entities/product-variant.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
@injectable()
export class UpdateProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<ProductVariant>.
     */
    async execute(
        id: number,
        updates: Partial<ProductVariant>
    ): Promise<ProductVariant> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
