import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class CreateTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the create use case.
     * @param ticket - The Ticket required by the service method.
     * @returns A promise with the service result of type Promise<Ticket>.
     */
    async execute(ticket: Ticket): Promise<Ticket> {
        const result = await this.service.create(ticket);

        return result;
    }
}
