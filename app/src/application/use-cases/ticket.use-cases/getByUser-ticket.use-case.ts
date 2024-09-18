import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

/**
 * Use case class for getByUser.
 * This class encapsulates the business logic for getByUser.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class GetByUserTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the getByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Ticket[]>.
     */
    async execute(userId: number): Promise<Ticket[]> {
        const result = await this.service.getByUser(userId);

        return result;
    }
}
