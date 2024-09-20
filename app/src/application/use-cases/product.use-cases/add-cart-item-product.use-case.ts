import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';
import { CartItem } from '../../../domain/entities/cart-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addCartItem.
 * This class encapsulates the business logic for addCartItem.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class AddCartItemProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the addCartItem use case.
     * @param productId - The number required by the service method.
     * @param cartItem - The CartItem required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, cartItem: CartItem): Promise<Product> {
        const result = await this.service.addCartItem(productId, cartItem);

        return result;
    }
}
