import { injectable, inject } from 'tsyringe';
import type { ICartItemRepository } from '../../domain/repositories/cart-item.repository';
import { ICartItemRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { CartItem } from '../../domain/entities/cart-item.entity';

/**
 * Service class for handling CartItem-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class CartItemService {
    /**
     * Constructor for CartItemService.
     * Injects the repository dependency.
     *
     * @param cartItemRepository - The repository that handles CartItem data operations.
     */
    constructor(
        @inject(ICartItemRepositoryToken)
        private readonly cartItemRepository: ICartItemRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param item - The CartItem required by the repository method.
     * @returns Promise<CartItem> - The result from the repository method.
     */
    public async create(item: CartItem): Promise<CartItem> {
        return await this.cartItemRepository.create(item);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<CartItem | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<CartItem | null> {
        return await this.cartItemRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param data - The Partial required by the repository method.
     * @returns Promise<CartItem> - The result from the repository method.
     */
    public async update(
        id: number,
        data: Partial<CartItem>
    ): Promise<CartItem> {
        return await this.cartItemRepository.update(id, data);
    }

    /**
     * Service method for remove.
     * Calls the repository's remove method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async remove(id: number): Promise<boolean> {
        return await this.cartItemRepository.remove(id);
    }

    /**
     * Service method for getByCartId.
     * Calls the repository's getByCartId method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<CartItem[]> - The result from the repository method.
     */
    public async getByCartId(cartId: number): Promise<CartItem[]> {
        return await this.cartItemRepository.getByCartId(cartId);
    }

    /**
     * Service method for updateQuantity.
     * Calls the repository's updateQuantity method.
     * @param id - The number required by the repository method.
     * @param quantity - The number required by the repository method.
     * @returns Promise<CartItem> - The result from the repository method.
     */
    public async updateQuantity(
        id: number,
        quantity: number
    ): Promise<CartItem> {
        return await this.cartItemRepository.updateQuantity(id, quantity);
    }

    /**
     * Service method for clearCart.
     * Calls the repository's clearCart method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async clearCart(cartId: number): Promise<boolean> {
        return await this.cartItemRepository.clearCart(cartId);
    }

    /**
     * Service method for calculateCartTotal.
     * Calls the repository's calculateCartTotal method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async calculateCartTotal(cartId: number): Promise<number> {
        return await this.cartItemRepository.calculateCartTotal(cartId);
    }

    /**
     * Service method for getHighestQuantityItem.
     * Calls the repository's getHighestQuantityItem method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<CartItem | null> - The result from the repository method.
     */
    public async getHighestQuantityItem(
        cartId: number
    ): Promise<CartItem | null> {
        return await this.cartItemRepository.getHighestQuantityItem(cartId);
    }
}
