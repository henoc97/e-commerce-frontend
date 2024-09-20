import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';
import { NotificationType } from '../../../domain/enums/notification-type.enum';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByType.
 * This class encapsulates the business logic for getByType.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
@injectable()
export class GetByTypeNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the getByType use case.
     * @param type - The NotificationType required by the service method.
     * @returns A promise with the service result of type Promise<Notification[]>.
     */
    async execute(type: NotificationType): Promise<Notification[]> {
        const result = await this.service.getByType(type);

        return result;
    }
}
