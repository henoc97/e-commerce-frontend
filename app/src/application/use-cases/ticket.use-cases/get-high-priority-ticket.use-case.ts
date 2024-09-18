import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

/**
 * Use case class for getHighPriority.
 * This class encapsulates the business logic for getHighPriority.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class GetHighPriorityTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the getHighPriority use case.
     * @returns A promise with the service result of type Promise<Ticket[]>.
     */
    async execute(): Promise<Ticket[]> {
        const result = await this.service.getHighPriority();

        return result;
    }
}
