import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    ADD_ITEM_TO_CART,
    CLEAR_CART,
    CREATE_CART,
    DELETE_CART,
    FETCH_CART_BY_ID,
    FETCH_CART_BY_USER_ID,
    FETCH_ITEM_COUNT,
    FETCH_TOTAL_VALUE,
    MERGE_CARTS,
    REMOVE_ITEM_FROM_CART,
    UPDATE_CART,
} from '../config/graphql/queries/cart.queries';
import { Cart } from '../../domain/entities/cart.entity';
import { CartItem } from '../../domain/entities/cart-item.entity';
import { ICartRepository } from '../../domain/repositories/cart.repository';

@injectable()
export class CartRepositoryImpl implements ICartRepository {
    async create(cart: Cart): Promise<Cart> {
        const { data } = await client.mutate({
            mutation: CREATE_CART,
            variables: { cart },
        });
        return data.createCart;
    }

    async getById(id: number): Promise<Cart | null> {
        const { data } = await client.query({
            query: FETCH_CART_BY_ID,
            variables: { id },
        });
        return data.fetchCartById;
    }

    async update(id: number, data: Partial<Cart>): Promise<Cart> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_CART,
            variables: { cartId: id, data },
        });
        return updatedData.updateCart;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_CART,
            variables: { cartId: id },
        });
        return data.deleteCart;
    }

    async addItem(cartId: number, item: CartItem): Promise<Cart> {
        const { data } = await client.mutate({
            mutation: ADD_ITEM_TO_CART,
            variables: { cartId, item },
        });
        return data.addItemToCart;
    }

    async removeItem(cartId: number, itemId: number): Promise<Cart> {
        const { data } = await client.mutate({
            mutation: REMOVE_ITEM_FROM_CART,
            variables: { cartId, itemId },
        });
        return data.removeItemFromCart;
    }

    async getItems(cartId: number): Promise<CartItem[]> {
        const { data } = await client.query({
            query: FETCH_CART_BY_ID,
            variables: { id: cartId },
        });
        return data.fetchCartById.items;
    }

    async clear(cartId: number): Promise<Cart> {
        const { data } = await client.mutate({
            mutation: CLEAR_CART,
            variables: { cartId },
        });
        return data.clearCart;
    }

    async getByUserId(userId: number): Promise<Cart | null> {
        const { data } = await client.query({
            query: FETCH_CART_BY_USER_ID,
            variables: { userId },
        });
        return data.fetchCartByUserId;
    }

    async mergeCarts(sourceCartId: number, targetCartId: number): Promise<Cart> {
        const { data } = await client.mutate({
            mutation: MERGE_CARTS,
            variables: { sourceCartId, targetCartId },
        });
        return data.mergeCarts;
    }

    async getItemCount(cartId: number): Promise<number> {
        const { data } = await client.query({
            query: FETCH_ITEM_COUNT,
            variables: { cartId },
        });
        return data.fetchItemCount;
    }

    async getTotalValue(cartId: number): Promise<number> {
        const { data } = await client.query({
            query: FETCH_TOTAL_VALUE,
            variables: { cartId },
        });
        return data.fetchTotalValue;
    }
}
