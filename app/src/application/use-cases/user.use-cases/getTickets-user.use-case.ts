import { Ticket } from '../../../domain/entities/ticket.entity';
import { UserService } from '../../services/user.service';

/**
 * Use case class for getTickets.
 * This class encapsulates the business logic for getTickets.
 * It interacts with the User service to perform operations on the user repository.
 */
export class GetTicketsUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getTickets use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Ticket[]>.
     */
    async execute(userId: number): Promise<Ticket[]> {
        const result = await this.service.getTickets(userId);

        return result;
    }
}
