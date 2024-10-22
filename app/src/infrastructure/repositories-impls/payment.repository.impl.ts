import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_PAYMENT,
    DELETE_PAYMENT,
    FETCH_MOST_RECENT_PAYMENT_BY_ORDER_ID,
    FETCH_PAYMENT_BY_ID,
    FETCH_PAYMENTS_BY_DATE_RANGE,
    FETCH_PAYMENTS_BY_METHOD,
    FETCH_PAYMENTS_BY_ORDER_ID,
    FETCH_PAYMENTS_BY_STATUS,
    FETCH_PAYMENTS_GROUPED_BY_METHOD,
    FETCH_TOTAL_AMOUNT_BY_DATE_RANGE,
    UPDATE_PAYMENT,
} from '../config/graphql/queries/payment.queries';
import { Payment } from '../../domain/entities/payment.entity';
import { PaymentStatus } from '../../domain/enums/payment-status.enum';
import { IPaymentRepository } from '../../domain/repositories/payment.repository';

@injectable()
export class PaymentRepositoryImpl implements IPaymentRepository {
    async create(payment: Payment): Promise<Payment> {
        const { data } = await client.mutate({
            mutation: CREATE_PAYMENT,
            variables: { paymentDTO: payment },
        });
        return data.createPayment;
    }

    async getById(id: number): Promise<Payment | null> {
        const { data } = await client.query({
            query: FETCH_PAYMENT_BY_ID,
            variables: { id },
        });
        return data.fetchPaymentById;
    }

    async update(id: number, updates: Partial<Payment>): Promise<Payment> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_PAYMENT,
            variables: { id, updates },
        });
        return updatedData.updatePayment;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_PAYMENT,
            variables: { id },
        });
        return data.deletePayment;
    }

    async getByOrderId(orderId: number): Promise<Payment[]> {
        const { data } = await client.query({
            query: FETCH_PAYMENTS_BY_ORDER_ID,
            variables: { orderId },
        });
        return data.fetchPaymentsByOrderId;
    }

    async getByMethod(method: string): Promise<Payment[]> {
        const { data } = await client.query({
            query: FETCH_PAYMENTS_BY_METHOD,
            variables: { method },
        });
        return data.fetchPaymentsByMethod;
    }

    async getByStatus(status: PaymentStatus): Promise<Payment[]> {
        const { data } = await client.query({
            query: FETCH_PAYMENTS_BY_STATUS,
            variables: { status },
        });
        return data.fetchPaymentsByStatus;
    }

    async getByDateRange(startDate: Date, endDate: Date): Promise<Payment[]> {
        const { data } = await client.query({
            query: FETCH_PAYMENTS_BY_DATE_RANGE,
            variables: { startDate, endDate },
        });
        return data.fetchPaymentsByDateRange;
    }

    async getTotalAmountByDateRange(startDate: Date, endDate: Date): Promise<number> {
        const { data } = await client.query({
            query: FETCH_TOTAL_AMOUNT_BY_DATE_RANGE,
            variables: { startDate, endDate },
        });
        return data.fetchTotalAmountByDateRange;
    }

    async getMostRecentPaymentByOrderId(orderId: number): Promise<Payment | null> {
        const { data } = await client.query({
            query: FETCH_MOST_RECENT_PAYMENT_BY_ORDER_ID,
            variables: { orderId },
        });
        return data.fetchMostRecentPaymentByOrderId;
    }

    async getPaymentsGroupedByMethod(): Promise<Map<string, Payment[]>> {
        const { data } = await client.query({
            query: FETCH_PAYMENTS_GROUPED_BY_METHOD,
        });
        const result = new Map<string, Payment[]>();
        data.fetchPaymentsGroupedByMethod.forEach((group: any) => {
            result.set(group.method, group.payments);
        });
        return result;
    }
}
