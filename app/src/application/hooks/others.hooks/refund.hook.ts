import { useAppDispatch, useAppSelector } from '../index.hook';

import { Refund } from '../../../domain/entities/refund.entity';

import { approveRefund } from '../../states/thunks/refund.thunks/approve-refund.thunk';
import { cancelRefund } from '../../states/thunks/refund.thunks/cancel-refund.thunk';
import { createRefund } from '../../states/thunks/refund.thunks/create-refund.thunk';
import { getByIdRefund } from '../../states/thunks/refund.thunks/get-by-id-refund.thunk';
import { getByOrderRefund } from '../../states/thunks/refund.thunks/get-by-order-refund.thunk';
import { getByStatusRefund } from '../../states/thunks/refund.thunks/get-by-status-refund.thunk';
import { getTotalRefundedRefund } from '../../states/thunks/refund.thunks/get-total-refunded-refund.thunk';
import { isEligibleRefund } from '../../states/thunks/refund.thunks/is-eligible-refund.thunk';
import { issuePartialRefund } from '../../states/thunks/refund.thunks/issue-partial-refund.thunk';
import { modifyRefund } from '../../states/thunks/refund.thunks/modify-refund.thunk';
import { processRefund } from '../../states/thunks/refund.thunks/process-refund.thunk';
import { removeRefund } from '../../states/thunks/refund.thunks/remove-refund.thunk';

export const useRefund: any = () => {
    const dispatch = useAppDispatch();
    const refunds = useAppSelector((state: any) => state.refunds);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleApproveRefund = (id: number) => {
        dispatch(approveRefund({ id }));
    };

    const handleCancelRefund = (id: number) => {
        dispatch(cancelRefund({ id }));
    };

    const handleCreateRefund = (refund: Refund) => {
        dispatch(createRefund({ refund }));
    };

    const handleGetByIdRefund = (id: number) => {
        dispatch(getByIdRefund({ id }));
    };

    const handleGetByOrderRefund = (orderId: number) => {
        dispatch(getByOrderRefund({ orderId }));
    };

    const handleGetByStatusRefund = (status: RefundStatus) => {
        dispatch(getByStatusRefund({ status }));
    };

    const handleGetTotalRefundedRefund = (orderId: number) => {
        dispatch(getTotalRefundedRefund({ orderId }));
    };

    const handleIsEligibleRefund = (refund: Refund) => {
        dispatch(isEligibleRefund({ refund }));
    };

    const handleIssuePartialRefund = (id: number, amount: number) => {
        dispatch(issuePartialRefund({ id, amount }));
    };

    const handleModifyRefund = (id: number, updates: Partial<Refund>) => {
        dispatch(modifyRefund({ id, updates }));
    };

    const handleProcessRefund = (id: number, status: RefundStatus) => {
        dispatch(processRefund({ id, status }));
    };

    const handleRemoveRefund = (id: number) => {
        dispatch(removeRefund({ id }));
    };

    return {
        ...refunds,
        loading,
        success,
        error,
        handleApproveRefund,
        handleCancelRefund,
        handleCreateRefund,
        handleGetByIdRefund,
        handleGetByOrderRefund,
        handleGetByStatusRefund,
        handleGetTotalRefundedRefund,
        handleIsEligibleRefund,
        handleIssuePartialRefund,
        handleModifyRefund,
        handleProcessRefund,
        handleRemoveRefund,
    };
};
