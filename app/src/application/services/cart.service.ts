import { injectable, inject } from 'tsyringe';
import type { ICartRepository } from '../../domain/repositories/cart.repository';
import { ICartRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Cart } from '../../domain/entities/cart.entity';

/**
 * Service class for handling Cart-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class CartService {
    /**
     * Constructor for CartService.
     * Injects the repository dependency.
     *
     * @param cartRepository - The repository that handles Cart data operations.
     */
    constructor(
        @inject(ICartRepositoryToken)
        private readonly cartRepository: ICartRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param cart - The Cart required by the repository method.
     * @returns Promise<Cart> - The result from the repository method.
     */
    public async create(cart: Cart): Promise<Cart> {
        return await this.cartRepository.create(cart);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Cart | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Cart | null> {
        return await this.cartRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param data - The Partial required by the repository method.
     * @returns Promise<Cart> - The result from the repository method.
     */
    public async update(id: number, data: Partial<Cart>): Promise<Cart> {
        return await this.cartRepository.update(id, data);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.cartRepository.delete(id);
    }

    /**
     * Service method for addItem.
     * Calls the repository's addItem method.
     * @param cartId - The number required by the repository method.
     * @param item - The CartItem required by the repository method.
     * @returns Promise<Cart> - The result from the repository method.
     */
    public async addItem(cartId: number, item: CartItem): Promise<Cart> {
        return await this.cartRepository.addItem(cartId, item);
    }

    /**
     * Service method for removeItem.
     * Calls the repository's removeItem method.
     * @param cartId - The number required by the repository method.
     * @param itemId - The number required by the repository method.
     * @returns Promise<Cart> - The result from the repository method.
     */
    public async removeItem(cartId: number, itemId: number): Promise<Cart> {
        return await this.cartRepository.removeItem(cartId, itemId);
    }

    /**
     * Service method for getItems.
     * Calls the repository's getItems method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<CartItem[]> - The result from the repository method.
     */
    public async getItems(cartId: number): Promise<CartItem[]> {
        return await this.cartRepository.getItems(cartId);
    }

    /**
     * Service method for clear.
     * Calls the repository's clear method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<Cart> - The result from the repository method.
     */
    public async clear(cartId: number): Promise<Cart> {
        return await this.cartRepository.clear(cartId);
    }

    /**
     * Service method for getByUserId.
     * Calls the repository's getByUserId method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Cart | null> - The result from the repository method.
     */
    public async getByUserId(userId: number): Promise<Cart | null> {
        return await this.cartRepository.getByUserId(userId);
    }

    /**
     * Service method for mergeCarts.
     * Calls the repository's mergeCarts method.
     * @param sourceCartId - The number required by the repository method.
     * @param targetCartId - The number required by the repository method.
     * @returns Promise<Cart> - The result from the repository method.
     */
    public async mergeCarts(
        sourceCartId: number,
        targetCartId: number
    ): Promise<Cart> {
        return await this.cartRepository.mergeCarts(sourceCartId, targetCartId);
    }

    /**
     * Service method for getItemCount.
     * Calls the repository's getItemCount method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getItemCount(cartId: number): Promise<number> {
        return await this.cartRepository.getItemCount(cartId);
    }

    /**
     * Service method for getTotalValue.
     * Calls the repository's getTotalValue method.
     * @param cartId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getTotalValue(cartId: number): Promise<number> {
        return await this.cartRepository.getTotalValue(cartId);
    }
}
