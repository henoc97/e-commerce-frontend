import { ProductVariantService } from '../../services/product-variant.service';
import { ProductVariant } from '../../../domain/entities/product-variant.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the ProductVariant service to perform operations on the productvariant repository.
 */
export class GetByIdProductVariant {
    constructor(private readonly service: ProductVariantService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<ProductVariant | null>.
     */
    async execute(id: number): Promise<ProductVariant | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
