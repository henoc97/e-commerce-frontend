import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Product service to perform operations on the product repository.
 */
export class CreateProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the create use case.
     * @param product - The Product required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(product: Product): Promise<Product> {
        const result = await this.service.create(product);

        return result;
    }
}
