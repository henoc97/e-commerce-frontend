import { createSlice } from '@reduxjs/toolkit';

import { Ticket } from '../../../domain/entities/ticket.entity';

import { closeTicketTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/close-ticket-ticket.extra-reducers';
import { countOpenByUserTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/count-open-by-user-ticket.extra-reducers';
import { createTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/create-ticket.extra-reducers';
import { getByDateRangeTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/get-by-date-range-ticket.extra-reducers';
import { getByIdTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/get-by-id-ticket.extra-reducers';
import { getByStatusTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/get-by-status-ticket.extra-reducers';
import { getByUserTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/get-by-user-ticket.extra-reducers';
import { getHighPriorityTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/get-high-priority-ticket.extra-reducers';
import { getLatestTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/get-latest-ticket.extra-reducers';
import { removeTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/remove-ticket.extra-reducers';
import { updateTicketExtraReducers } from '../extra-reducers/ticket.extra-reducers/update-ticket.extra-reducers';

interface TicketState {
    tickets: Ticket[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: TicketState = {
    tickets: [],
    loading: false,
    success: false,
    error: null,
};

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        resetticketState: (state) => {
            (state.tickets = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        closeTicketTicketExtraReducers(builder);
        countOpenByUserTicketExtraReducers(builder);
        createTicketExtraReducers(builder);
        getByDateRangeTicketExtraReducers(builder);
        getByIdTicketExtraReducers(builder);
        getByStatusTicketExtraReducers(builder);
        getByUserTicketExtraReducers(builder);
        getHighPriorityTicketExtraReducers(builder);
        getLatestTicketExtraReducers(builder);
        removeTicketExtraReducers(builder);
        updateTicketExtraReducers(builder);
    },
});

export const { resetticketState } = ticketSlice.actions;

export default ticketSlice.reducer;
