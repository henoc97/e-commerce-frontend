import { injectable, inject } from 'tsyringe';
import type { ITicketRepository } from '../../domain/repositories/ticket.repository';
import { ITicketRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Ticket } from '../../domain/entities/ticket.entity';

/**
 * Service class for handling Ticket-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class TicketService {
    /**
     * Constructor for TicketService.
     * Injects the repository dependency.
     *
     * @param ticketRepository - The repository that handles Ticket data operations.
     */
    constructor(
        @inject(ITicketRepositoryToken)
        private readonly ticketRepository: ITicketRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param ticket - The Ticket required by the repository method.
     * @returns Promise<Ticket> - The result from the repository method.
     */
    public async create(ticket: Ticket): Promise<Ticket> {
        return await this.ticketRepository.create(ticket);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Ticket | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Ticket | null> {
        return await this.ticketRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Ticket> - The result from the repository method.
     */
    public async update(id: number, updates: Partial<Ticket>): Promise<Ticket> {
        return await this.ticketRepository.update(id, updates);
    }

    /**
     * Service method for remove.
     * Calls the repository's remove method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async remove(id: number): Promise<boolean> {
        return await this.ticketRepository.remove(id);
    }

    /**
     * Service method for getByUser.
     * Calls the repository's getByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Ticket[]> - The result from the repository method.
     */
    public async getByUser(userId: number): Promise<Ticket[]> {
        return await this.ticketRepository.getByUser(userId);
    }

    /**
     * Service method for getByStatus.
     * Calls the repository's getByStatus method.
     * @param status - The TicketStatus required by the repository method.
     * @returns Promise<Ticket[]> - The result from the repository method.
     */
    public async getByStatus(status: TicketStatus): Promise<Ticket[]> {
        return await this.ticketRepository.getByStatus(status);
    }

    /**
     * Service method for getByDateRange.
     * Calls the repository's getByDateRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<Ticket[]> - The result from the repository method.
     */
    public async getByDateRange(
        startDate: Date,
        endDate: Date
    ): Promise<Ticket[]> {
        return await this.ticketRepository.getByDateRange(startDate, endDate);
    }

    /**
     * Service method for getLatest.
     * Calls the repository's getLatest method.
     * @returns Promise<Ticket> - The result from the repository method.
     */
    public async getLatest(): Promise<Ticket> {
        return await this.ticketRepository.getLatest();
    }

    /**
     * Service method for countOpenByUser.
     * Calls the repository's countOpenByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async countOpenByUser(userId: number): Promise<number> {
        return await this.ticketRepository.countOpenByUser(userId);
    }

    /**
     * Service method for getHighPriority.
     * Calls the repository's getHighPriority method.
     * @returns Promise<Ticket[]> - The result from the repository method.
     */
    public async getHighPriority(): Promise<Ticket[]> {
        return await this.ticketRepository.getHighPriority();
    }

    /**
     * Service method for closeTicket.
     * Calls the repository's closeTicket method.
     * @param id - The number required by the repository method.
     * @returns Promise<Ticket> - The result from the repository method.
     */
    public async closeTicket(id: number): Promise<Ticket> {
        return await this.ticketRepository.closeTicket(id);
    }
}
