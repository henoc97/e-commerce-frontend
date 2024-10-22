import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_TICKET,
    CLOSE_TICKET,
    FETCH_TICKET_BY_ID,
    LIST_TICKETS_BY_USER,
    DELETE_TICKET,
    FETCH_LATEST_TICKET,
    LIST_HIGH_PRIORITY_TICKETS,
    LIST_TICKETS_BY_DATE_RANGE,
    LIST_TICKETS_BY_STATUS,
    UPDATE_TICKET,
    COUNT_OPEN_TICKETS_BY_USER,
} from '../config/graphql/queries/ticket.queries';
import { Ticket } from '../../domain/entities/ticket.entity';
import { TicketStatus } from '../../domain/enums/ticket-status.enum';
import { ITicketRepository } from '../../domain/repositories/ticket.repository';

@injectable()
export class TicketRepositoryImpl implements ITicketRepository {
    async create(ticket: Ticket): Promise<Ticket> {
        const { data } = await client.mutate({
            mutation: CREATE_TICKET,
            variables: { ticketDTO: ticket },
        });
        return data.createTicket;
    }

    async getById(id: number): Promise<Ticket | null> {
        const { data } = await client.query({
            query: FETCH_TICKET_BY_ID,
            variables: { id },
        });
        return data.fetchTicketById;
    }

    async update(id: number, updates: Partial<Ticket>): Promise<Ticket> {
        const { data } = await client.mutate({
            mutation: UPDATE_TICKET,
            variables: { id, updates },
        });
        return data.updateTicket;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_TICKET,
            variables: { id },
        });
        return data.deleteTicket;
    }

    async getByUser(userId: number): Promise<Ticket[]> {
        const { data } = await client.query({
            query: LIST_TICKETS_BY_USER,
            variables: { userId },
        });
        return data.listTicketsByUser;
    }

    async getByStatus(status: TicketStatus): Promise<Ticket[]> {
        const { data } = await client.query({
            query: LIST_TICKETS_BY_STATUS,
            variables: { status },
        });
        return data.listTicketsByStatus;
    }

    async getByDateRange(startDate: Date, endDate: Date): Promise<Ticket[]> {
        const { data } = await client.query({
            query: LIST_TICKETS_BY_DATE_RANGE,
            variables: { startDate, endDate },
        });
        return data.listTicketsByDateRange;
    }

    async getLatest(): Promise<Ticket> {
        const { data } = await client.query({
            query: FETCH_LATEST_TICKET,
        });
        return data.fetchLatestTicket;
    }

    async countOpenByUser(userId: number): Promise<number> {
        const { data } = await client.query({
            query: COUNT_OPEN_TICKETS_BY_USER,
            variables: { userId },
        });
        return data.countOpenTicketsByUser;
    }

    async getHighPriority(): Promise<Ticket[]> {
        const { data } = await client.query({
            query: LIST_HIGH_PRIORITY_TICKETS,
        });
        return data.listHighPriorityTickets;
    }

    async closeTicket(id: number): Promise<Ticket> {
        const { data } = await client.mutate({
            mutation: CLOSE_TICKET,
            variables: { id },
        });
        return data.closeTicket;
    }
}
