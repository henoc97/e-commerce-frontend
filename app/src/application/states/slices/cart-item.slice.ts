import { createSlice } from '@reduxjs/toolkit';

import { CartItem } from '../../../domain/entities/cart-item.entity';

import { calculateCartTotalCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/calculate-cart-total-cart-item.extra-reducers';
import { clearCartCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/clear-cart-cart-item.extra-reducers';
import { createCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/create-cart-item.extra-reducers';
import { getByCartIdCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/get-by-cart-id-cart-item.extra-reducers';
import { getByIdCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/get-by-id-cart-item.extra-reducers';
import { getHighestQuantityItemCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/get-highest-quantity-item-cart-item.extra-reducers';
import { removeCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/remove-cart-item.extra-reducers';
import { updateCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/update-cart-item.extra-reducers';
import { updateQuantityCartItemExtraReducers } from '../extra-reducers/cart-item.extra-reducers/update-quantity-cart-item.extra-reducers';

interface CartItemState {
    cartItems: CartItem[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: CartItemState = {
    cartItems: [],
    loading: false,
    success: false,
    error: null,
};

const cartItemSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        resetcartItemState: (state) => {
            (state.cartItems = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        calculateCartTotalCartItemExtraReducers(builder);
        clearCartCartItemExtraReducers(builder);
        createCartItemExtraReducers(builder);
        getByCartIdCartItemExtraReducers(builder);
        getByIdCartItemExtraReducers(builder);
        getHighestQuantityItemCartItemExtraReducers(builder);
        removeCartItemExtraReducers(builder);
        updateCartItemExtraReducers(builder);
        updateQuantityCartItemExtraReducers(builder);
    },
});

export const { resetcartItemState } = cartItemSlice.actions;

export default cartItemSlice.reducer;
