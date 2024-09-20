import { createSlice } from '@reduxjs/toolkit';

import { Order } from '../../../domain/entities/order.entity';

import { addPaymentOrderExtraReducers } from '../extra-reducers/order.extra-reducers/add-payment-order.extra-reducers';
import { addRefundOrderExtraReducers } from '../extra-reducers/order.extra-reducers/add-refund-order.extra-reducers';
import { createOrderExtraReducers } from '../extra-reducers/order.extra-reducers/create-order.extra-reducers';
import { deleteOrderExtraReducers } from '../extra-reducers/order.extra-reducers/delete-order.extra-reducers';
import { getByDateRangeOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-by-date-range-order.extra-reducers';
import { getByIdOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-by-id-order.extra-reducers';
import { getByShopIdOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-by-shop-id-order.extra-reducers';
import { getByStatusOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-by-status-order.extra-reducers';
import { getByTrackingNumberOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-by-tracking-number-order.extra-reducers';
import { getByUserIdOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-by-user-id-order.extra-reducers';
import { getRecentOrdersByShopOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-recent-orders-by-shop-order.extra-reducers';
import { getTopOrdersByAmountOrderExtraReducers } from '../extra-reducers/order.extra-reducers/get-top-orders-by-amount-order.extra-reducers';
import { updateOrderExtraReducers } from '../extra-reducers/order.extra-reducers/update-order.extra-reducers';
import { updateStatusOrderExtraReducers } from '../extra-reducers/order.extra-reducers/update-status-order.extra-reducers';

interface OrderState {
    orders: Order[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: OrderState = {
    orders: [],
    loading: false,
    success: false,
    error: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetorderState: (state) => {
            (state.orders = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        addPaymentOrderExtraReducers(builder);
        addRefundOrderExtraReducers(builder);
        createOrderExtraReducers(builder);
        deleteOrderExtraReducers(builder);
        getByDateRangeOrderExtraReducers(builder);
        getByIdOrderExtraReducers(builder);
        getByShopIdOrderExtraReducers(builder);
        getByStatusOrderExtraReducers(builder);
        getByTrackingNumberOrderExtraReducers(builder);
        getByUserIdOrderExtraReducers(builder);
        getRecentOrdersByShopOrderExtraReducers(builder);
        getTopOrdersByAmountOrderExtraReducers(builder);
        updateOrderExtraReducers(builder);
        updateStatusOrderExtraReducers(builder);
    },
});

export const { resetorderState } = orderSlice.actions;

export default orderSlice.reducer;
