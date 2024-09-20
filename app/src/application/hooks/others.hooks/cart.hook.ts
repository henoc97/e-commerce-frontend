import { useAppDispatch, useAppSelector } from '../index.hook';

import { Cart } from '../../../domain/entities/cart.entity';

import { addItemCart } from '../../states/thunks/cart.thunks/add-item-cart.thunk';
import { clearCart } from '../../states/thunks/cart.thunks/clear-cart.thunk';
import { createCart } from '../../states/thunks/cart.thunks/create-cart.thunk';
import { deleteCart } from '../../states/thunks/cart.thunks/delete-cart.thunk';
import { getByIdCart } from '../../states/thunks/cart.thunks/get-by-id-cart.thunk';
import { getByUserIdCart } from '../../states/thunks/cart.thunks/get-by-user-id-cart.thunk';
import { getItemCountCart } from '../../states/thunks/cart.thunks/get-item-count-cart.thunk';
import { getItemsCart } from '../../states/thunks/cart.thunks/get-items-cart.thunk';
import { getTotalValueCart } from '../../states/thunks/cart.thunks/get-total-value-cart.thunk';
import { mergeCartsCart } from '../../states/thunks/cart.thunks/merge-carts-cart.thunk';
import { removeItemCart } from '../../states/thunks/cart.thunks/remove-item-cart.thunk';
import { updateCart } from '../../states/thunks/cart.thunks/update-cart.thunk';

export const useCart: any = () => {
    const dispatch = useAppDispatch();
    const carts = useAppSelector((state: any) => state.carts);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleAddItemCart = (cartId: number, item: CartItem) => {
        dispatch(addItemCart({ cartId, item }));
    };

    const handleClearCart = (cartId: number) => {
        dispatch(clearCart({ cartId }));
    };

    const handleCreateCart = (cart: Cart) => {
        dispatch(createCart({ cart }));
    };

    const handleDeleteCart = (id: number) => {
        dispatch(deleteCart({ id }));
    };

    const handleGetByIdCart = (id: number) => {
        dispatch(getByIdCart({ id }));
    };

    const handleGetByUserIdCart = (userId: number) => {
        dispatch(getByUserIdCart({ userId }));
    };

    const handleGetItemCountCart = (cartId: number) => {
        dispatch(getItemCountCart({ cartId }));
    };

    const handleGetItemsCart = (cartId: number) => {
        dispatch(getItemsCart({ cartId }));
    };

    const handleGetTotalValueCart = (cartId: number) => {
        dispatch(getTotalValueCart({ cartId }));
    };

    const handleMergeCartsCart = (
        sourceCartId: number,
        targetCartId: number
    ) => {
        dispatch(mergeCartsCart({ sourceCartId, targetCartId }));
    };

    const handleRemoveItemCart = (cartId: number, itemId: number) => {
        dispatch(removeItemCart({ cartId, itemId }));
    };

    const handleUpdateCart = (id: number, data: Partial<Cart>) => {
        dispatch(updateCart({ id, data }));
    };

    return {
        ...carts,
        loading,
        success,
        error,
        handleAddItemCart,
        handleClearCart,
        handleCreateCart,
        handleDeleteCart,
        handleGetByIdCart,
        handleGetByUserIdCart,
        handleGetItemCountCart,
        handleGetItemsCart,
        handleGetTotalValueCart,
        handleMergeCartsCart,
        handleRemoveItemCart,
        handleUpdateCart,
    };
};
