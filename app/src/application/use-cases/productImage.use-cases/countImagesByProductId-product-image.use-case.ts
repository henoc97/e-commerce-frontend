import { ProductImageService } from '../../services/product-image.service';

/**
 * Use case class for countImagesByProductId.
 * This class encapsulates the business logic for countImagesByProductId.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
export class CountImagesByProductIdProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the countImagesByProductId use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(productId: number): Promise<number> {
        const result = await this.service.countImagesByProductId(productId);

        return result;
    }
}
