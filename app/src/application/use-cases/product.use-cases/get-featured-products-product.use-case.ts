import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

/**
 * Use case class for getFeaturedProducts.
 * This class encapsulates the business logic for getFeaturedProducts.
 * It interacts with the Product service to perform operations on the product repository.
 */
export class GetFeaturedProductsProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the getFeaturedProducts use case.
     * @returns A promise with the service result of type Promise<Product[]>.
     */
    async execute(): Promise<Product[]> {
        const result = await this.service.getFeaturedProducts();

        return result;
    }
}
