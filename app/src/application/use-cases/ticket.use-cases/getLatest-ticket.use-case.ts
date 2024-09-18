import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

/**
 * Use case class for getLatest.
 * This class encapsulates the business logic for getLatest.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class GetLatestTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the getLatest use case.
     * @returns A promise with the service result of type Promise<Ticket>.
     */
    async execute(): Promise<Ticket> {
        const result = await this.service.getLatest();

        return result;
    }
}
