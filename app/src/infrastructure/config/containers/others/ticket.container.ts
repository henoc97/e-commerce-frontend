import { container } from 'tsyringe';

import { ITicketRepositoryToken } from '../../tokens/tokens';
import { ITicketRepository } from '../../../../domain/repositories/ticket.repository';
import { TicketRepositoryImpl } from '../../../repositories-impls/ticket.repository-impl';
import { TicketService } from '../../../../application/services/ticket.service';

import { CreateTicket } from '../../../../application/use-cases/ticket.use-cases/create-ticket.use-case';
import { GetByIdTicket } from '../../../../application/use-cases/ticket.use-cases/get-by-id-ticket.use-case';
import { UpdateTicket } from '../../../../application/use-cases/ticket.use-cases/update-ticket.use-case';
import { RemoveTicket } from '../../../../application/use-cases/ticket.use-cases/remove-ticket.use-case';
import { GetByUserTicket } from '../../../../application/use-cases/ticket.use-cases/get-by-user-ticket.use-case';
import { GetByStatusTicket } from '../../../../application/use-cases/ticket.use-cases/get-by-status-ticket.use-case';
import { GetByDateRangeTicket } from '../../../../application/use-cases/ticket.use-cases/get-by-date-range-ticket.use-case';
import { GetLatestTicket } from '../../../../application/use-cases/ticket.use-cases/get-latest-ticket.use-case';
import { CountOpenByUserTicket } from '../../../../application/use-cases/ticket.use-cases/count-open-by-user-ticket.use-case';
import { GetHighPriorityTicket } from '../../../../application/use-cases/ticket.use-cases/get-high-priority-ticket.use-case';
import { CloseTicketTicket } from '../../../../application/use-cases/ticket.use-cases/close-ticket-ticket.use-case';

// Registering dependencies

/**
 * Register the TicketRepository's concrete implementation
 */
container.register<ITicketRepository>(ITicketRepositoryToken, {
    useClass: TicketRepositoryImpl,
});
container.register<TicketService>(TicketService, { useClass: TicketService });

container.register<CreateTicket>(CreateTicket, { useClass: CreateTicket });

container.register<GetByIdTicket>(GetByIdTicket, { useClass: GetByIdTicket });

container.register<UpdateTicket>(UpdateTicket, { useClass: UpdateTicket });

container.register<RemoveTicket>(RemoveTicket, { useClass: RemoveTicket });

container.register<GetByUserTicket>(GetByUserTicket, {
    useClass: GetByUserTicket,
});

container.register<GetByStatusTicket>(GetByStatusTicket, {
    useClass: GetByStatusTicket,
});

container.register<GetByDateRangeTicket>(GetByDateRangeTicket, {
    useClass: GetByDateRangeTicket,
});

container.register<GetLatestTicket>(GetLatestTicket, {
    useClass: GetLatestTicket,
});

container.register<CountOpenByUserTicket>(CountOpenByUserTicket, {
    useClass: CountOpenByUserTicket,
});

container.register<GetHighPriorityTicket>(GetHighPriorityTicket, {
    useClass: GetHighPriorityTicket,
});

container.register<CloseTicketTicket>(CloseTicketTicket, {
    useClass: CloseTicketTicket,
});

// Exporting the container
export { container };
