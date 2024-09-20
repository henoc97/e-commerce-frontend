import { PayloadAction } from '@reduxjs/toolkit';
import { updateMarketplace } from '../../thunks/marketplace.thunks/update-marketplace.thunk';

import { Marketplace } from '../../../../domain/entities/marketplace.entity';

/**
 * updateMarketplaceExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateMarketplace'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateMarketplace' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateMarketplace' thunk successfully resolves. It receives an action
 *    containing an array of 'Marketplace' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateMarketplace' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateMarketplace' thunk.
 *
 * @thunk updateMarketplace - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.marketplaces - An array that stores Marketplace fetched by the fulfilled case.
 */
export const updateMarketplaceExtraReducers = (builder: any) => {
    builder
        .addCase(updateMarketplace.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateMarketplace.fulfilled,
            (state: any, action: PayloadAction<Marketplace>) => {
                state.loading = false;
                state.success = true;
                const index = state.marketplaces.findIndex(
                    (marketplace: Marketplace) =>
                        marketplace.id === action.payload.id
                );
                if (index !== -1) {
                    state.marketplaces[index] = action.payload;
                }
            }
        )
        .addCase(
            updateMarketplace.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateMarketplace in extra-reducer state';
            }
        );
};
