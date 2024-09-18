import { Product } from '@/app/src/domain/entities/product.entity';
import { CategoryService } from '../../services/category.service';

/**
 * Use case class for getProducts.
 * This class encapsulates the business logic for getProducts.
 * It interacts with the Category service to perform operations on the category repository.
 */
export class GetProductsCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the getProducts use case.
     * @param categoryId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product[]>.
     */
    async execute(categoryId: number): Promise<Product[]> {
        const result = await this.service.getProducts(categoryId);

        return result;
    }
}
