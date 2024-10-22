import { injectable, injectAll } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_CART_ITEM,
    DELETE_CART_ITEM,
    GET_CART_ITEM_BY_ID,
    GET_CART_ITEM_BY_PRODUCT_AND_CART,
    GET_CART_ITEMS_BY_CART_ID,
    GET_HIGHEST_QUANTITY_ITEM,
    UPDATE_CART_ITEM_QUANTITY,
    UPDATE_CART_ITEM,
    CALCULATE_CART_TOTAL,
    CLEAR_CART,
} from '../config/graphql/queries/cart-item.queries';
import { CartItem } from '../../domain/entities/cart-item.entity';
import { ICartItemRepository } from '../../domain/repositories/cart-item.repository';

@injectable()
export class CartItemRepositoryImpl implements ICartItemRepository {
    async create(item: CartItem): Promise<CartItem> {
        const { data } = await client.mutate({
            mutation: CREATE_CART_ITEM,
            variables: { cartItemDTO: item },
        });
        return data.createCartItem;
    }

    async getById(id: number): Promise<CartItem | null> {
        const { data } = await client.query({
            query: GET_CART_ITEM_BY_ID,
            variables: { id },
        });
        return data.fetchCartItemById;
    }

    async update(id: number, data: Partial<CartItem>): Promise<CartItem> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_CART_ITEM,
            variables: { id, cartItemDTO: data },
        });
        return updatedData.updateCartItem;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_CART_ITEM,
            variables: { id },
        });
        return data.deleteCartItem;
    }

    async getByCartId(cartId: number): Promise<CartItem[]> {
        const { data } = await client.query({
            query: GET_CART_ITEMS_BY_CART_ID,
            variables: { cartId },
        });
        return data.fetchCartItemsByCartId;
    }

    async getByProductAndCart(productId: number, cartId: number): Promise<CartItem | null> {
        const { data } = await client.query({
            query: GET_CART_ITEM_BY_PRODUCT_AND_CART,
            variables: { productId, cartId },
        });
        return data.fetchCartItemByProductAndCart;
    }

    async updateQuantity(id: number, quantity: number): Promise<CartItem> {
        const { data } = await client.mutate({
            mutation: UPDATE_CART_ITEM_QUANTITY,
            variables: { id, quantity },
        });
        return data.updateCartItemQuantity;
    }

    async clearCart(cartId: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: CLEAR_CART,
            variables: { cartId },
        });
        return data.clearCart;
    }

    async calculateCartTotal(cartId: number): Promise<number> {
        const { data } = await client.query({
            query: CALCULATE_CART_TOTAL,
            variables: { cartId },
        });
        return data.calculateCartTotal;
    }

    async getHighestQuantityItem(cartId: number): Promise<CartItem | null> {
        const { data } = await client.query({
            query: GET_HIGHEST_QUANTITY_ITEM,
            variables: { cartId },
        });
        return data.fetchHighestQuantityItem;
    }
}
