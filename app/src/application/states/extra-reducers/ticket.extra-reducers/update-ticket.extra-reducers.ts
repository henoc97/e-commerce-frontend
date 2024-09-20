import { PayloadAction } from '@reduxjs/toolkit';
import { updateTicket } from '../../thunks/ticket.thunks/update-ticket.thunk';

import { Ticket } from '../../../../domain/entities/ticket.entity';

/**
 * updateTicketExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateTicket'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateTicket' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateTicket' thunk successfully resolves. It receives an action
 *    containing an array of 'Ticket' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateTicket' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateTicket' thunk.
 *
 * @thunk updateTicket - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.tickets - An array that stores Ticket fetched by the fulfilled case.
 */
export const updateTicketExtraReducers = (builder: any) => {
    builder
        .addCase(updateTicket.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateTicket.fulfilled,
            (state: any, action: PayloadAction<Ticket>) => {
                state.loading = false;
                state.success = true;
                const index = state.tickets.findIndex(
                    (ticket: Ticket) => ticket.id === action.payload.id
                );
                if (index !== -1) {
                    state.tickets[index] = action.payload;
                }
            }
        )
        .addCase(
            updateTicket.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateTicket in extra-reducer state';
            }
        );
};
