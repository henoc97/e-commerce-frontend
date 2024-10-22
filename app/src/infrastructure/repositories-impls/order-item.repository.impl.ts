import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_ORDER_ITEM,
    DELETE_ORDER_ITEM,
    FETCH_ORDER_ITEM_BY_ID,
    FETCH_ORDER_ITEMS_BY_ORDER_ID,
    FETCH_ORDER_ITEMS_BY_PRODUCT_ID,
    FETCH_RECENT_ORDER_ITEMS,
    FETCH_LOW_STOCK_ORDER_ITEMS,
    UPDATE_ORDER_ITEM,
    CALCULATE_TOTAL_PRICE,
} from '../config/graphql/queries/order-item.queries';
import { OrderItem } from '../../domain/entities/order-item.entity';
import { IOrderItemRepository } from '../../domain/repositories/order-item.repository';

@injectable()
export class OrderItemRepositoryImpl implements IOrderItemRepository {
    async create(item: OrderItem): Promise<OrderItem> {
        const { data } = await client.mutate({
            mutation: CREATE_ORDER_ITEM,
            variables: { orderItemDTO: item },
        });
        return data.createOrderItem;
    }

    async getById(id: number): Promise<OrderItem | null> {
        const { data } = await client.query({
            query: FETCH_ORDER_ITEM_BY_ID,
            variables: { id },
        });
        return data.fetchOrderItemById;
    }

    async update(id: number, updates: Partial<OrderItem>): Promise<OrderItem> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_ORDER_ITEM,
            variables: { id, updates },
        });
        return updatedData.updateOrderItem;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_ORDER_ITEM,
            variables: { id },
        });
        return data.deleteOrderItem;
    }

    async getByOrderId(orderId: number): Promise<OrderItem[]> {
        const { data } = await client.query({
            query: FETCH_ORDER_ITEMS_BY_ORDER_ID,
            variables: { orderId },
        });
        return data.fetchOrderItemsByOrderId;
    }

    async getByProductId(productId: number): Promise<OrderItem[]> {
        const { data } = await client.query({
            query: FETCH_ORDER_ITEMS_BY_PRODUCT_ID,
            variables: { productId },
        });
        return data.fetchOrderItemsByProductId;
    }

    async calculateTotalPrice(orderId: number): Promise<number> {
        const { data } = await client.query({
            query: CALCULATE_TOTAL_PRICE,
            variables: { orderId },
        });
        return data.calculateTotalPrice;
    }

    async getRecentItems(orderId: number): Promise<OrderItem[]> {
        const { data } = await client.query({
            query: FETCH_RECENT_ORDER_ITEMS,
            variables: { orderId },
        });
        return data.fetchRecentOrderItems;
    }

    async getLowStockItems(threshold: number): Promise<OrderItem[]> {
        const { data } = await client.query({
            query: FETCH_LOW_STOCK_ORDER_ITEMS,
            variables: { threshold },
        });
        return data.fetchLowStockOrderItems;
    }
}
