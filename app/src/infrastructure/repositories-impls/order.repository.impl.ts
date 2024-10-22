import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    GET_ORDER_BY_ID,
    GET_ORDERS,
    CREATE_ORDER,
    DELETE_ORDER,
    UPDATE_ORDER_STATUS,
    ADD_PAYMENT_TO_ORDER,
    ADD_REFUND_TO_ORDER,
    GET_ORDER_BY_TRACKING_NUMBER,
    GET_ORDERS_BY_DATE_RANGE,
    GET_ORDERS_BY_SHOP_ID,
    GET_ORDERS_BY_STATUS,
    GET_ORDERS_BY_USER_ID,
    GET_RECENT_ORDERS_BY_SHOP,
    GET_TOP_ORDERS_BY_AMOUNT,
    UPDATE_ORDER,
} from '../config/graphql/queries/order.queries';
import { Order } from '../../domain/entities/order.entity';
import { OrderStatus } from '../../domain/enums/order-status.enum';
import { IOrderRepository } from '../../domain/repositories/order.repository';

@injectable()
export class OrderRepositoryImpl implements IOrderRepository {
    async create(order: Order): Promise<Order> {
        const { data } = await client.mutate({
            mutation: CREATE_ORDER,
            variables: { orderDTO: order },
        });
        return data.createOrder;
    }

    async getById(id: number): Promise<Order | null> {
        const { data } = await client.query({
            query: GET_ORDER_BY_ID,
            variables: { id },
        });
        return data.getOrderById;
    }

    async update(id: number, updates: Partial<Order>): Promise<Order> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_ORDER,
            variables: { orderId: id, updates },
        });
        return updatedData.updateOrder;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_ORDER,
            variables: { id },
        });
        return data.deleteOrder;
    }

    async getByUserId(userId: number): Promise<Order[]> {
        const { data } = await client.query({
            query: GET_ORDERS_BY_USER_ID,
            variables: { userId },
        });
        return data.getOrdersByUserId;
    }

    async getByShopId(shopId: number): Promise<Order[]> {
        const { data } = await client.query({
            query: GET_ORDERS_BY_SHOP_ID,
            variables: { shopId },
        });
        return data.getOrdersByShopId;
    }

    async getByStatus(status: OrderStatus): Promise<Order[]> {
        const { data } = await client.query({
            query: GET_ORDERS_BY_STATUS,
            variables: { status },
        });
        return data.getOrdersByStatus;
    }

    async updateStatus(id: number, status: OrderStatus): Promise<Order> {
        const { data } = await client.mutate({
            mutation: UPDATE_ORDER_STATUS,
            variables: { orderId: id, status },
        });
        return data.updateOrderStatus;
    }

    async addPayment(orderId: number, paymentId: string): Promise<Order> {
        const { data } = await client.mutate({
            mutation: ADD_PAYMENT_TO_ORDER,
            variables: { orderId, paymentId },
        });
        return data.addPaymentToOrder;
    }

    async addRefund(orderId: number, refundId: string): Promise<Order> {
        const { data } = await client.mutate({
            mutation: ADD_REFUND_TO_ORDER,
            variables: { orderId, refundId },
        });
        return data.addRefundToOrder;
    }

    async getByTrackingNumber(trackingNumber: string): Promise<Order | null> {
        const { data } = await client.query({
            query: GET_ORDER_BY_TRACKING_NUMBER,
            variables: { trackingNumber },
        });
        return data.getOrderByTrackingNumber;
    }

    async getByDateRange(startDate: Date, endDate: Date): Promise<Order[]> {
        const { data } = await client.query({
            query: GET_ORDERS_BY_DATE_RANGE,
            variables: { startDate, endDate },
        });
        return data.getOrdersByDateRange;
    }

    async getRecentOrdersByShop(shopId: number, limit: number): Promise<Order[]> {
        const { data } = await client.query({
            query: GET_RECENT_ORDERS_BY_SHOP,
            variables: { shopId, limit },
        });
        return data.getRecentOrdersByShop;
    }

    async getTopOrdersByAmount(topN: number): Promise<Order[]> {
        const { data } = await client.query({
            query: GET_TOP_ORDERS_BY_AMOUNT,
            variables: { topN },
        });
        return data.getTopOrdersByAmount;
    }
}
