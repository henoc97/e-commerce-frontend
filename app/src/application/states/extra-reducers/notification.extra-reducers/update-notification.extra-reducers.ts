import { PayloadAction } from '@reduxjs/toolkit';
import { updateNotification } from '../../thunks/notification.thunks/update-notification.thunk';

import { Notification } from '../../../../domain/entities/notification.entity';

/**
 * updateNotificationExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateNotification'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateNotification' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateNotification' thunk successfully resolves. It receives an action
 *    containing an array of 'Notification' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateNotification' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateNotification' thunk.
 *
 * @thunk updateNotification - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.notifications - An array that stores Notification fetched by the fulfilled case.
 */
export const updateNotificationExtraReducers = (builder: any) => {
    builder
        .addCase(updateNotification.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateNotification.fulfilled,
            (state: any, action: PayloadAction<Notification>) => {
                state.loading = false;
                state.success = true;
                const index = state.notifications.findIndex(
                    (notification: Notification) =>
                        notification.id === action.payload.id
                );
                if (index !== -1) {
                    state.notifications[index] = action.payload;
                }
            }
        )
        .addCase(
            updateNotification.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateNotification in extra-reducer state';
            }
        );
};