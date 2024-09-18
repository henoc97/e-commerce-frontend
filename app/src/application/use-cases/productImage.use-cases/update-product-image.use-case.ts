import { ProductImageService } from '../../services/product-image.service';
import { ProductImage } from '../../../domain/entities/product-image.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
export class UpdateProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<ProductImage>.
     */
    async execute(
        id: number,
        updates: Partial<ProductImage>
    ): Promise<ProductImage> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
