import { useAppDispatch, useAppSelector } from '../index.hook';

import { OrderItem } from '../../../domain/entities/order-item.entity';

import { calculateTotalPriceOrderItem } from '../../states/thunks/order-item.thunks/calculate-total-price-order-item.thunk';
import { createOrderItem } from '../../states/thunks/order-item.thunks/create-order-item.thunk';
import { deleteOrderItem } from '../../states/thunks/order-item.thunks/delete-order-item.thunk';
import { getByIdOrderItem } from '../../states/thunks/order-item.thunks/get-by-id-order-item.thunk';
import { getByOrderIdOrderItem } from '../../states/thunks/order-item.thunks/get-by-order-id-order-item.thunk';
import { getByProductIdOrderItem } from '../../states/thunks/order-item.thunks/get-by-product-id-order-item.thunk';
import { getLowStockItemsOrderItem } from '../../states/thunks/order-item.thunks/get-low-stock-items-order-item.thunk';
import { getRecentItemsOrderItem } from '../../states/thunks/order-item.thunks/get-recent-items-order-item.thunk';
import { updateOrderItem } from '../../states/thunks/order-item.thunks/update-order-item.thunk';

export const useOrderItem: any = () => {
    const dispatch = useAppDispatch();
    const orderItems = useAppSelector((state: any) => state.orderItems);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCalculateTotalPriceOrderItem = (orderId: number) => {
        dispatch(calculateTotalPriceOrderItem({ orderId }));
    };

    const handleCreateOrderItem = (item: OrderItem) => {
        dispatch(createOrderItem({ item }));
    };

    const handleDeleteOrderItem = (id: number) => {
        dispatch(deleteOrderItem({ id }));
    };

    const handleGetByIdOrderItem = (id: number) => {
        dispatch(getByIdOrderItem({ id }));
    };

    const handleGetByOrderIdOrderItem = (orderId: number) => {
        dispatch(getByOrderIdOrderItem({ orderId }));
    };

    const handleGetByProductIdOrderItem = (productId: number) => {
        dispatch(getByProductIdOrderItem({ productId }));
    };

    const handleGetLowStockItemsOrderItem = (threshold: number) => {
        dispatch(getLowStockItemsOrderItem({ threshold }));
    };

    const handleGetRecentItemsOrderItem = (orderId: number) => {
        dispatch(getRecentItemsOrderItem({ orderId }));
    };

    const handleUpdateOrderItem = (id: number, updates: Partial<OrderItem>) => {
        dispatch(updateOrderItem({ id, updates }));
    };

    return {
        ...orderItems,
        loading,
        success,
        error,
        handleCalculateTotalPriceOrderItem,
        handleCreateOrderItem,
        handleDeleteOrderItem,
        handleGetByIdOrderItem,
        handleGetByOrderIdOrderItem,
        handleGetByProductIdOrderItem,
        handleGetLowStockItemsOrderItem,
        handleGetRecentItemsOrderItem,
        handleUpdateOrderItem,
    };
};
