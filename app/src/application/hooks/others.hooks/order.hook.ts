import { useAppDispatch, useAppSelector } from '../index.hook';

import { Order } from '../../../domain/entities/order.entity';

import { addPaymentOrder } from '../../states/thunks/order.thunks/add-payment-order.thunk';
import { addRefundOrder } from '../../states/thunks/order.thunks/add-refund-order.thunk';
import { createOrder } from '../../states/thunks/order.thunks/create-order.thunk';
import { deleteOrder } from '../../states/thunks/order.thunks/delete-order.thunk';
import { getByDateRangeOrder } from '../../states/thunks/order.thunks/get-by-date-range-order.thunk';
import { getByIdOrder } from '../../states/thunks/order.thunks/get-by-id-order.thunk';
import { getByShopIdOrder } from '../../states/thunks/order.thunks/get-by-shop-id-order.thunk';
import { getByStatusOrder } from '../../states/thunks/order.thunks/get-by-status-order.thunk';
import { getByTrackingNumberOrder } from '../../states/thunks/order.thunks/get-by-tracking-number-order.thunk';
import { getByUserIdOrder } from '../../states/thunks/order.thunks/get-by-user-id-order.thunk';
import { getRecentOrdersByShopOrder } from '../../states/thunks/order.thunks/get-recent-orders-by-shop-order.thunk';
import { getTopOrdersByAmountOrder } from '../../states/thunks/order.thunks/get-top-orders-by-amount-order.thunk';
import { updateOrder } from '../../states/thunks/order.thunks/update-order.thunk';
import { updateStatusOrder } from '../../states/thunks/order.thunks/update-status-order.thunk';

export const useOrder: any = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector((state: any) => state.orders);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleAddPaymentOrder = (orderId: number, paymentId: string) => {
        dispatch(addPaymentOrder({ orderId, paymentId }));
    };

    const handleAddRefundOrder = (orderId: number, refundId: string) => {
        dispatch(addRefundOrder({ orderId, refundId }));
    };

    const handleCreateOrder = (order: Order) => {
        dispatch(createOrder({ order }));
    };

    const handleDeleteOrder = (id: number) => {
        dispatch(deleteOrder({ id }));
    };

    const handleGetByDateRangeOrder = (startDate: Date, endDate: Date) => {
        dispatch(getByDateRangeOrder({ startDate, endDate }));
    };

    const handleGetByIdOrder = (id: number) => {
        dispatch(getByIdOrder({ id }));
    };

    const handleGetByShopIdOrder = (shopId: number) => {
        dispatch(getByShopIdOrder({ shopId }));
    };

    const handleGetByStatusOrder = (status: OrderStatus) => {
        dispatch(getByStatusOrder({ status }));
    };

    const handleGetByTrackingNumberOrder = (trackingNumber: string) => {
        dispatch(getByTrackingNumberOrder({ trackingNumber }));
    };

    const handleGetByUserIdOrder = (userId: number) => {
        dispatch(getByUserIdOrder({ userId }));
    };

    const handleGetRecentOrdersByShopOrder = (
        shopId: number,
        limit: number
    ) => {
        dispatch(getRecentOrdersByShopOrder({ shopId, limit }));
    };

    const handleGetTopOrdersByAmountOrder = (topN: number) => {
        dispatch(getTopOrdersByAmountOrder({ topN }));
    };

    const handleUpdateOrder = (id: number, updates: Partial<Order>) => {
        dispatch(updateOrder({ id, updates }));
    };

    const handleUpdateStatusOrder = (id: number, status: OrderStatus) => {
        dispatch(updateStatusOrder({ id, status }));
    };

    return {
        ...orders,
        loading,
        success,
        error,
        handleAddPaymentOrder,
        handleAddRefundOrder,
        handleCreateOrder,
        handleDeleteOrder,
        handleGetByDateRangeOrder,
        handleGetByIdOrder,
        handleGetByShopIdOrder,
        handleGetByStatusOrder,
        handleGetByTrackingNumberOrder,
        handleGetByUserIdOrder,
        handleGetRecentOrdersByShopOrder,
        handleGetTopOrdersByAmountOrder,
        handleUpdateOrder,
        handleUpdateStatusOrder,
    };
};
