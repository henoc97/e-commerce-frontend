import { ProductImageService } from '../../services/product-image.service';
import { ProductImage } from '../../../domain/entities/product-image.entity';

/**
 * Use case class for getByProductId.
 * This class encapsulates the business logic for getByProductId.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
export class GetByProductIdProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the getByProductId use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<ProductImage[]>.
     */
    async execute(productId: number): Promise<ProductImage[]> {
        const result = await this.service.getByProductId(productId);

        return result;
    }
}
