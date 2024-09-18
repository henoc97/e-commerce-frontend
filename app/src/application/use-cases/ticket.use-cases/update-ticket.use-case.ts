import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class UpdateTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Ticket>.
     */
    async execute(id: number, updates: Partial<Ticket>): Promise<Ticket> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
