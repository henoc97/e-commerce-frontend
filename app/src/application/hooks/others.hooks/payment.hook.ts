import { useAppDispatch, useAppSelector } from '../index.hook';

import { Payment } from '../../../domain/entities/payment.entity';

import { createPayment } from '../../states/thunks/payment.thunks/create-payment.thunk';
import { deletePayment } from '../../states/thunks/payment.thunks/delete-payment.thunk';
import { getByDateRangePayment } from '../../states/thunks/payment.thunks/get-by-date-range-payment.thunk';
import { getByIdPayment } from '../../states/thunks/payment.thunks/get-by-id-payment.thunk';
import { getByMethodPayment } from '../../states/thunks/payment.thunks/get-by-method-payment.thunk';
import { getByOrderIdPayment } from '../../states/thunks/payment.thunks/get-by-order-id-payment.thunk';
import { getByStatusPayment } from '../../states/thunks/payment.thunks/get-by-status-payment.thunk';
import { getMostRecentPaymentByOrderIdPayment } from '../../states/thunks/payment.thunks/get-most-recent-payment-by-order-id-payment.thunk';
import { getPaymentsGroupedByMethodPayment } from '../../states/thunks/payment.thunks/get-payments-grouped-by-method-payment.thunk';
import { getTotalAmountByDateRangePayment } from '../../states/thunks/payment.thunks/get-total-amount-by-date-range-payment.thunk';
import { updatePayment } from '../../states/thunks/payment.thunks/update-payment.thunk';

export const usePayment: any = () => {
    const dispatch = useAppDispatch();
    const payments = useAppSelector((state: any) => state.payments);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCreatePayment = (payment: Payment) => {
        dispatch(createPayment({ payment }));
    };

    const handleDeletePayment = (id: number) => {
        dispatch(deletePayment({ id }));
    };

    const handleGetByDateRangePayment = (startDate: Date, endDate: Date) => {
        dispatch(getByDateRangePayment({ startDate, endDate }));
    };

    const handleGetByIdPayment = (id: number) => {
        dispatch(getByIdPayment({ id }));
    };

    const handleGetByMethodPayment = (method: string) => {
        dispatch(getByMethodPayment({ method }));
    };

    const handleGetByOrderIdPayment = (orderId: number) => {
        dispatch(getByOrderIdPayment({ orderId }));
    };

    const handleGetByStatusPayment = (status: PaymentStatus) => {
        dispatch(getByStatusPayment({ status }));
    };

    const handleGetMostRecentPaymentByOrderIdPayment = (orderId: number) => {
        dispatch(getMostRecentPaymentByOrderIdPayment({ orderId }));
    };

    const handleGetPaymentsGroupedByMethodPayment = () => {
        dispatch(getPaymentsGroupedByMethodPayment({}));
    };

    const handleGetTotalAmountByDateRangePayment = (
        startDate: Date,
        endDate: Date
    ) => {
        dispatch(getTotalAmountByDateRangePayment({ startDate, endDate }));
    };

    const handleUpdatePayment = (id: number, updates: Partial<Payment>) => {
        dispatch(updatePayment({ id, updates }));
    };

    return {
        ...payments,
        loading,
        success,
        error,
        handleCreatePayment,
        handleDeletePayment,
        handleGetByDateRangePayment,
        handleGetByIdPayment,
        handleGetByMethodPayment,
        handleGetByOrderIdPayment,
        handleGetByStatusPayment,
        handleGetMostRecentPaymentByOrderIdPayment,
        handleGetPaymentsGroupedByMethodPayment,
        handleGetTotalAmountByDateRangePayment,
        handleUpdatePayment,
    };
};
