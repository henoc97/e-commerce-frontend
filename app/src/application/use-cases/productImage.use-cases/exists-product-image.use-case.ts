import { ProductImageService } from '../../services/product-image.service';

/**
 * Use case class for exists.
 * This class encapsulates the business logic for exists.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
export class ExistsProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the exists use case.
     * @param productId - The number required by the service method.
     * @param url - The string required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(productId: number, url: string): Promise<boolean> {
        const result = await this.service.exists(productId, url);

        return result;
    }
}
