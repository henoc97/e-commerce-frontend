import { ProductVariantService } from '../../services/product-variant.service';
import { ProductVariant } from '../../../domain/entities/product-variant.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
export class CreateProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the create use case.
     * @param variant - The ProductVariant required by the service method.
     * @returns A promise with the service result of type Promise<ProductVariant>.
     */
    async execute(variant: ProductVariant): Promise<ProductVariant> {
        const result = await this.service.create(variant);

        return result;
    }
}
