import { PayloadAction } from '@reduxjs/toolkit';
import { updateSubsite } from '../../thunks/subsite.thunks/update-subsite.thunk';

import { Subsite } from '../../../../domain/entities/subsite.entity';

/**
 * updateSubsiteExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateSubsite'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateSubsite' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateSubsite' thunk successfully resolves. It receives an action
 *    containing an array of 'Subsite' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateSubsite' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateSubsite' thunk.
 *
 * @thunk updateSubsite - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.subsites - An array that stores Subsite fetched by the fulfilled case.
 */
export const updateSubsiteExtraReducers = (builder: any) => {
    builder
        .addCase(updateSubsite.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateSubsite.fulfilled,
            (state: any, action: PayloadAction<Subsite>) => {
                state.loading = false;
                state.success = true;
                const index = state.subsites.findIndex(
                    (subsite: Subsite) => subsite.id === action.payload.id
                );
                if (index !== -1) {
                    state.subsites[index] = action.payload;
                }
            }
        )
        .addCase(
            updateSubsite.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateSubsite in extra-reducer state';
            }
        );
};
