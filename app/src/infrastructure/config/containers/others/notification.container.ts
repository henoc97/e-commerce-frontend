import { container } from 'tsyringe';

import { INotificationRepositoryToken } from '../../tokens/tokens';
import { INotificationRepository } from '../../../../domain/repositories/notification.repository';
import { NotificationRepositoryImpl } from '../../../repositories-impls/notification.repository-impl';
import { NotificationService } from '../../../../application/services/notification.service';

import { CreateNotification } from '../../../../application/use-cases/notification.use-cases/create-notification.use-case';
import { GetByIdNotification } from '../../../../application/use-cases/notification.use-cases/get-by-id-notification.use-case';
import { UpdateNotification } from '../../../../application/use-cases/notification.use-cases/update-notification.use-case';
import { DeleteNotification } from '../../../../application/use-cases/notification.use-cases/delete-notification.use-case';
import { GetByUserIdNotification } from '../../../../application/use-cases/notification.use-cases/get-by-user-id-notification.use-case';
import { GetByTypeNotification } from '../../../../application/use-cases/notification.use-cases/get-by-type-notification.use-case';
import { GetByDateRangeNotification } from '../../../../application/use-cases/notification.use-cases/get-by-date-range-notification.use-case';
import { MarkAsReadNotification } from '../../../../application/use-cases/notification.use-cases/mark-as-read-notification.use-case';
import { CountUnreadNotification } from '../../../../application/use-cases/notification.use-cases/count-unread-notification.use-case';
import { GetRecentNotification } from '../../../../application/use-cases/notification.use-cases/get-recent-notification.use-case';

// Registering dependencies

/**
 * Register the NotificationRepository's concrete implementation
 */
container.register<INotificationRepository>(INotificationRepositoryToken, {
    useClass: NotificationRepositoryImpl,
});
container.register<NotificationService>(NotificationService, {
    useClass: NotificationService,
});

container.register<CreateNotification>(CreateNotification, {
    useClass: CreateNotification,
});

container.register<GetByIdNotification>(GetByIdNotification, {
    useClass: GetByIdNotification,
});

container.register<UpdateNotification>(UpdateNotification, {
    useClass: UpdateNotification,
});

container.register<DeleteNotification>(DeleteNotification, {
    useClass: DeleteNotification,
});

container.register<GetByUserIdNotification>(GetByUserIdNotification, {
    useClass: GetByUserIdNotification,
});

container.register<GetByTypeNotification>(GetByTypeNotification, {
    useClass: GetByTypeNotification,
});

container.register<GetByDateRangeNotification>(GetByDateRangeNotification, {
    useClass: GetByDateRangeNotification,
});

container.register<MarkAsReadNotification>(MarkAsReadNotification, {
    useClass: MarkAsReadNotification,
});

container.register<CountUnreadNotification>(CountUnreadNotification, {
    useClass: CountUnreadNotification,
});

container.register<GetRecentNotification>(GetRecentNotification, {
    useClass: GetRecentNotification,
});

// Exporting the container
export { container };
