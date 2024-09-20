import { createSlice } from '@reduxjs/toolkit';

import { OrderItem } from '../../../domain/entities/order-item.entity';

import { calculateTotalPriceOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/calculate-total-price-order-item.extra-reducers';
import { createOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/create-order-item.extra-reducers';
import { deleteOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/delete-order-item.extra-reducers';
import { getByIdOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/get-by-id-order-item.extra-reducers';
import { getByOrderIdOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/get-by-order-id-order-item.extra-reducers';
import { getByProductIdOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/get-by-product-id-order-item.extra-reducers';
import { getLowStockItemsOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/get-low-stock-items-order-item.extra-reducers';
import { getRecentItemsOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/get-recent-items-order-item.extra-reducers';
import { updateOrderItemExtraReducers } from '../extra-reducers/order-item.extra-reducers/update-order-item.extra-reducers';

interface OrderItemState {
    orderItems: OrderItem[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: OrderItemState = {
    orderItems: [],
    loading: false,
    success: false,
    error: null,
};

const orderItemSlice = createSlice({
    name: 'orderItem',
    initialState,
    reducers: {
        resetorderItemState: (state) => {
            (state.orderItems = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        calculateTotalPriceOrderItemExtraReducers(builder);
        createOrderItemExtraReducers(builder);
        deleteOrderItemExtraReducers(builder);
        getByIdOrderItemExtraReducers(builder);
        getByOrderIdOrderItemExtraReducers(builder);
        getByProductIdOrderItemExtraReducers(builder);
        getLowStockItemsOrderItemExtraReducers(builder);
        getRecentItemsOrderItemExtraReducers(builder);
        updateOrderItemExtraReducers(builder);
    },
});

export const { resetorderItemState } = orderItemSlice.actions;

export default orderItemSlice.reducer;
