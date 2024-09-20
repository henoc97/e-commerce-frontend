import { RootState } from '../store/store';

export const selectTickets = (state: RootState) => state.ticket.tickets;
export const selectTicketLoading = (state: RootState) => state.ticket.loading;
export const selectTicketSuccess = (state: RootState) => state.ticket.success;
export const selectTicketError = (state: RootState) => state.ticket.error;
