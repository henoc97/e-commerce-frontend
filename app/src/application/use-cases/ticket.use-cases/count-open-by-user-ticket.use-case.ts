import { TicketService } from '../../services/ticket.service';

/**
 * Use case class for countOpenByUser.
 * This class encapsulates the business logic for countOpenByUser.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class CountOpenByUserTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the countOpenByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(userId: number): Promise<number> {
        const result = await this.service.countOpenByUser(userId);

        return result;
    }
}
