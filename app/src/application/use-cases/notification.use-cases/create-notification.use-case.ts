import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
@injectable()
export class CreateNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the create use case.
     * @param notification - The Notification required by the service method.
     * @returns A promise with the service result of type Promise<Notification>.
     */
    async execute(notification: Notification): Promise<Notification> {
        const result = await this.service.create(notification);

        return result;
    }
}
