import { useAppDispatch, useAppSelector } from '../index.hook';

import { CartItem } from '../../../domain/entities/cart-item.entity';

import { calculateCartTotalCartItem } from '../../states/thunks/cart-item.thunks/calculate-cart-total-cart-item.thunk';
import { clearCartCartItem } from '../../states/thunks/cart-item.thunks/clear-cart-cart-item.thunk';
import { createCartItem } from '../../states/thunks/cart-item.thunks/create-cart-item.thunk';
import { getByCartIdCartItem } from '../../states/thunks/cart-item.thunks/get-by-cart-id-cart-item.thunk';
import { getByIdCartItem } from '../../states/thunks/cart-item.thunks/get-by-id-cart-item.thunk';
import { getHighestQuantityItemCartItem } from '../../states/thunks/cart-item.thunks/get-highest-quantity-item-cart-item.thunk';
import { removeCartItem } from '../../states/thunks/cart-item.thunks/remove-cart-item.thunk';
import { updateCartItem } from '../../states/thunks/cart-item.thunks/update-cart-item.thunk';
import { updateQuantityCartItem } from '../../states/thunks/cart-item.thunks/update-quantity-cart-item.thunk';

export const useCartItem: any = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state: any) => state.cartItems);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCalculateCartTotalCartItem = (cartId: number) => {
        dispatch(calculateCartTotalCartItem({ cartId }));
    };

    const handleClearCartCartItem = (cartId: number) => {
        dispatch(clearCartCartItem({ cartId }));
    };

    const handleCreateCartItem = (item: CartItem) => {
        dispatch(createCartItem({ item }));
    };

    const handleGetByCartIdCartItem = (cartId: number) => {
        dispatch(getByCartIdCartItem({ cartId }));
    };

    const handleGetByIdCartItem = (id: number) => {
        dispatch(getByIdCartItem({ id }));
    };

    const handleGetHighestQuantityItemCartItem = (cartId: number) => {
        dispatch(getHighestQuantityItemCartItem({ cartId }));
    };

    const handleRemoveCartItem = (id: number) => {
        dispatch(removeCartItem({ id }));
    };

    const handleUpdateCartItem = (id: number, data: Partial<CartItem>) => {
        dispatch(updateCartItem({ id, data }));
    };

    const handleUpdateQuantityCartItem = (id: number, quantity: number) => {
        dispatch(updateQuantityCartItem({ id, quantity }));
    };

    return {
        ...cartItems,
        loading,
        success,
        error,
        handleCalculateCartTotalCartItem,
        handleClearCartCartItem,
        handleCreateCartItem,
        handleGetByCartIdCartItem,
        handleGetByIdCartItem,
        handleGetHighestQuantityItemCartItem,
        handleRemoveCartItem,
        handleUpdateCartItem,
        handleUpdateQuantityCartItem,
    };
};
