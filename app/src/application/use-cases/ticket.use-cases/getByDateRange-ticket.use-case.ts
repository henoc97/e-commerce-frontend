import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

/**
 * Use case class for getByDateRange.
 * This class encapsulates the business logic for getByDateRange.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
export class GetByDateRangeTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the getByDateRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<Ticket[]>.
     */
    async execute(startDate: Date, endDate: Date): Promise<Ticket[]> {
        const result = await this.service.getByDateRange(startDate, endDate);

        return result;
    }
}
