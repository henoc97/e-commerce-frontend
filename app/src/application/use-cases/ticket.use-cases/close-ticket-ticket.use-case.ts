import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

/**
 * Use case class for closeTicket.
 * This class encapsulates the business logic for closeTicket.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class CloseTicketTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the closeTicket use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Ticket>.
     */
    async execute(id: number): Promise<Ticket> {
        const result = await this.service.closeTicket(id);

        return result;
    }
}
