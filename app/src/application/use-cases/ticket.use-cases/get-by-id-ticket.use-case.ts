import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../../domain/entities/ticket.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Ticket service to perform operations on the ticket repository.
 */
@injectable()
export class GetByIdTicket {
    constructor(private readonly service: TicketService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Ticket | null>.
     */
    async execute(id: number): Promise<Ticket | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
