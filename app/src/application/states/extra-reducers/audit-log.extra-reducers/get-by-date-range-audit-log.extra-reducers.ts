import { PayloadAction } from '@reduxjs/toolkit';
import { getByDateRangeAuditLog } from '../../thunks/audit-log.thunks/get-by-date-range-audit-log.thunk';

import { AuditLog } from '../../../../domain/entities/audit-log.entity';

/**
 * getByDateRangeAuditLogExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'getByDateRangeAuditLog'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'getByDateRangeAuditLog' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'getByDateRangeAuditLog' thunk successfully resolves. It receives an action
 *    containing an array of 'AuditLog' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'getByDateRangeAuditLog' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'getByDateRangeAuditLog' thunk.
 *
 * @thunk getByDateRangeAuditLog - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.auditLogs - An array that stores AuditLog fetched by the fulfilled case.
 */
export const getByDateRangeAuditLogExtraReducers = (builder: any) => {
    builder
        .addCase(getByDateRangeAuditLog.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            getByDateRangeAuditLog.fulfilled,
            (state: any, action: PayloadAction<AuditLog[]>) => {
                state.loading = false;
                state.success = true;
                state.auditLogs.push(action.payload);
            }
        )
        .addCase(
            getByDateRangeAuditLog.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing getByDateRangeAuditLog in extra-reducer state';
            }
        );
};
