import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    APPROVE_REFUND,
    CANCEL_REFUND,
    CHECK_REFUND_ELIGIBILITY,
    CREATE_REFUND,
    DELETE_REFUND,
    FETCH_REFUND_BY_ID,
    FETCH_REFUNDS_BY_ORDER,
    FETCH_REFUNDS_BY_STATUS,
    FETCH_TOTAL_REFUNDED_AMOUNT,
    ISSUE_PARTIAL_REFUND,
    PROCESS_REFUND,
    UPDATE_REFUND,
} from '../config/graphql/queries/refund.queries';
import { Refund } from '../../domain/entities/refund.entity';
import { RefundStatus } from '../../domain/enums/refund-status.enum';
import { IRefundRepository } from '../../domain/repositories/refund.repository';

@injectable()
export class RefundRepositoryImpl implements IRefundRepository {
    async create(refund: Refund): Promise<Refund> {
        const { data } = await client.mutate({
            mutation: CREATE_REFUND,
            variables: { refundDTO: refund },
        });
        return data.createRefund;
    }

    async getById(id: number): Promise<Refund | null> {
        const { data } = await client.query({
            query: FETCH_REFUND_BY_ID,
            variables: { id },
        });
        return data.fetchRefundById;
    }

    async getByOrder(orderId: number): Promise<Refund[]> {
        const { data } = await client.query({
            query: FETCH_REFUNDS_BY_ORDER,
            variables: { orderId },
        });
        return data.fetchRefundsByOrder;
    }

    async modify(id: number, updates: Partial<Refund>): Promise<Refund> {
        const { data } = await client.mutate({
            mutation: UPDATE_REFUND,
            variables: { id, updates },
        });
        return data.updateRefund;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_REFUND,
            variables: { id },
        });
        return data.deleteRefund;
    }

    async isEligible(refund: Refund): Promise<boolean> {
        const { data } = await client.query({
            query: CHECK_REFUND_ELIGIBILITY,
            variables: { refund },
        });
        return data.checkRefundEligibility;
    }

    async process(id: number, status: RefundStatus): Promise<Refund> {
        const { data } = await client.mutate({
            mutation: PROCESS_REFUND,
            variables: { id, status },
        });
        return data.processRefund;
    }

    async getByStatus(status: RefundStatus): Promise<Refund[]> {
        const { data } = await client.query({
            query: FETCH_REFUNDS_BY_STATUS,
            variables: { status },
        });
        return data.fetchRefundsByStatus;
    }

    async cancel(id: number): Promise<Refund> {
        const { data } = await client.mutate({
            mutation: CANCEL_REFUND,
            variables: { id },
        });
        return data.cancelRefund;
    }

    async approve(id: number): Promise<Refund> {
        const { data } = await client.mutate({
            mutation: APPROVE_REFUND,
            variables: { id },
        });
        return data.approveRefund;
    }

    async issuePartial(id: number, amount: number): Promise<Refund> {
        const { data } = await client.mutate({
            mutation: ISSUE_PARTIAL_REFUND,
            variables: { id, amount },
        });
        return data.issuePartialRefund;
    }

    async getTotalRefunded(orderId: number): Promise<number> {
        const { data } = await client.query({
            query: FETCH_TOTAL_REFUNDED_AMOUNT,
            variables: { orderId },
        });
        return data.fetchTotalRefundedAmount;
    }
}
