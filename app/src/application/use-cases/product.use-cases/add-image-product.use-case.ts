import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';
import { ProductImage } from '../../../domain/entities/product-image.entity';

/**
 * Use case class for addImage.
 * This class encapsulates the business logic for addImage.
 * It interacts with the Product service to perform operations on the product repository.
 */
export class AddImageProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the addImage use case.
     * @param productId - The number required by the service method.
     * @param image - The ProductImage required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, image: ProductImage): Promise<Product> {
        const result = await this.service.addImage(productId, image);

        return result;
    }
}
