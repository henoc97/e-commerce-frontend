import { useAppDispatch, useAppSelector } from '../index.hook';

import { Ticket } from '../../../domain/entities/ticket.entity';

import { closeTicketTicket } from '../../states/thunks/ticket.thunks/close-ticket-ticket.thunk';
import { countOpenByUserTicket } from '../../states/thunks/ticket.thunks/count-open-by-user-ticket.thunk';
import { createTicket } from '../../states/thunks/ticket.thunks/create-ticket.thunk';
import { getByDateRangeTicket } from '../../states/thunks/ticket.thunks/get-by-date-range-ticket.thunk';
import { getByIdTicket } from '../../states/thunks/ticket.thunks/get-by-id-ticket.thunk';
import { getByStatusTicket } from '../../states/thunks/ticket.thunks/get-by-status-ticket.thunk';
import { getByUserTicket } from '../../states/thunks/ticket.thunks/get-by-user-ticket.thunk';
import { getHighPriorityTicket } from '../../states/thunks/ticket.thunks/get-high-priority-ticket.thunk';
import { getLatestTicket } from '../../states/thunks/ticket.thunks/get-latest-ticket.thunk';
import { removeTicket } from '../../states/thunks/ticket.thunks/remove-ticket.thunk';
import { updateTicket } from '../../states/thunks/ticket.thunks/update-ticket.thunk';

export const useTicket: any = () => {
    const dispatch = useAppDispatch();
    const tickets = useAppSelector((state: any) => state.tickets);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCloseTicketTicket = (id: number) => {
        dispatch(closeTicketTicket({ id }));
    };

    const handleCountOpenByUserTicket = (userId: number) => {
        dispatch(countOpenByUserTicket({ userId }));
    };

    const handleCreateTicket = (ticket: Ticket) => {
        dispatch(createTicket({ ticket }));
    };

    const handleGetByDateRangeTicket = (startDate: Date, endDate: Date) => {
        dispatch(getByDateRangeTicket({ startDate, endDate }));
    };

    const handleGetByIdTicket = (id: number) => {
        dispatch(getByIdTicket({ id }));
    };

    const handleGetByStatusTicket = (status: TicketStatus) => {
        dispatch(getByStatusTicket({ status }));
    };

    const handleGetByUserTicket = (userId: number) => {
        dispatch(getByUserTicket({ userId }));
    };

    const handleGetHighPriorityTicket = () => {
        dispatch(getHighPriorityTicket({}));
    };

    const handleGetLatestTicket = () => {
        dispatch(getLatestTicket({}));
    };

    const handleRemoveTicket = (id: number) => {
        dispatch(removeTicket({ id }));
    };

    const handleUpdateTicket = (id: number, updates: Partial<Ticket>) => {
        dispatch(updateTicket({ id, updates }));
    };

    return {
        ...tickets,
        loading,
        success,
        error,
        handleCloseTicketTicket,
        handleCountOpenByUserTicket,
        handleCreateTicket,
        handleGetByDateRangeTicket,
        handleGetByIdTicket,
        handleGetByStatusTicket,
        handleGetByUserTicket,
        handleGetHighPriorityTicket,
        handleGetLatestTicket,
        handleRemoveTicket,
        handleUpdateTicket,
    };
};
