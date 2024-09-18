import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

/**
 * Use case class for findByCategory.
 * This class encapsulates the business logic for findByCategory.
 * It interacts with the Product service to perform operations on the product repository.
 */
export class FindByCategoryProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the findByCategory use case.
     * @param categoryId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product[]>.
     */
    async execute(categoryId: number): Promise<Product[]> {
        const result = await this.service.findByCategory(categoryId);

        return result;
    }
}
