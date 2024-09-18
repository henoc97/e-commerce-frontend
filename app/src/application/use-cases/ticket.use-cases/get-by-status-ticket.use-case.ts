import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';
import { TicketStatus } from '../../../domain/enums/ticket-status.enum';

/**
 * Use case class for getByStatus.
 * This class encapsulates the business logic for getByStatus.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class GetByStatusTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the getByStatus use case.
     * @param status - The TicketStatus required by the service method.
     * @returns A promise with the service result of type Promise<Ticket[]>.
     */
    async execute(status: TicketStatus): Promise<Ticket[]> {
        const result = await this.service.getByStatus(status);

        return result;
    }
}
