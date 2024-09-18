import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

/**
 * Use case class for findByPriceRange.
 * This class encapsulates the business logic for findByPriceRange.
 * It interacts with the Product service to perform operations on the product repository.
 */
export class FindByPriceRangeProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the findByPriceRange use case.
     * @param minPrice - The number required by the service method.
     * @param maxPrice - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product[]>.
     */
    async execute(minPrice: number, maxPrice: number): Promise<Product[]> {
        const result = await this.service.findByPriceRange(minPrice, maxPrice);

        return result;
    }
}
