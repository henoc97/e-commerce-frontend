import { createSlice } from '@reduxjs/toolkit';

import { Cart } from '../../../domain/entities/cart.entity';

import { addItemCartExtraReducers } from '../extra-reducers/cart.extra-reducers/add-item-cart.extra-reducers';
import { clearCartExtraReducers } from '../extra-reducers/cart.extra-reducers/clear-cart.extra-reducers';
import { createCartExtraReducers } from '../extra-reducers/cart.extra-reducers/create-cart.extra-reducers';
import { deleteCartExtraReducers } from '../extra-reducers/cart.extra-reducers/delete-cart.extra-reducers';
import { getByIdCartExtraReducers } from '../extra-reducers/cart.extra-reducers/get-by-id-cart.extra-reducers';
import { getByUserIdCartExtraReducers } from '../extra-reducers/cart.extra-reducers/get-by-user-id-cart.extra-reducers';
import { getItemCountCartExtraReducers } from '../extra-reducers/cart.extra-reducers/get-item-count-cart.extra-reducers';
import { getItemsCartExtraReducers } from '../extra-reducers/cart.extra-reducers/get-items-cart.extra-reducers';
import { getTotalValueCartExtraReducers } from '../extra-reducers/cart.extra-reducers/get-total-value-cart.extra-reducers';
import { mergeCartsCartExtraReducers } from '../extra-reducers/cart.extra-reducers/merge-carts-cart.extra-reducers';
import { removeItemCartExtraReducers } from '../extra-reducers/cart.extra-reducers/remove-item-cart.extra-reducers';
import { updateCartExtraReducers } from '../extra-reducers/cart.extra-reducers/update-cart.extra-reducers';

interface CartState {
    carts: Cart[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: CartState = {
    carts: [],
    loading: false,
    success: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetcartState: (state) => {
            (state.carts = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        addItemCartExtraReducers(builder);
        clearCartExtraReducers(builder);
        createCartExtraReducers(builder);
        deleteCartExtraReducers(builder);
        getByIdCartExtraReducers(builder);
        getByUserIdCartExtraReducers(builder);
        getItemCountCartExtraReducers(builder);
        getItemsCartExtraReducers(builder);
        getTotalValueCartExtraReducers(builder);
        mergeCartsCartExtraReducers(builder);
        removeItemCartExtraReducers(builder);
        updateCartExtraReducers(builder);
    },
});

export const { resetcartState } = cartSlice.actions;

export default cartSlice.reducer;
