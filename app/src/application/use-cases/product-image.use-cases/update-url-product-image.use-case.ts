import { ProductImageService } from '../../services/product-image.service';
import { ProductImage } from '../../../domain/entities/product-image.entity';

/**
 * Use case class for updateUrl.
 * This class encapsulates the business logic for updateUrl.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
export class UpdateUrlProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the updateUrl use case.
     * @param id - The number required by the service method.
     * @param url - The string required by the service method.
     * @returns A promise with the service result of type Promise<ProductImage>.
     */
    async execute(id: number, url: string): Promise<ProductImage> {
        const result = await this.service.updateUrl(id, url);

        return result;
    }
}
