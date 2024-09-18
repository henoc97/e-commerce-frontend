import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
export class GetByIdNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Notification | null>.
     */
    async execute(id: number): Promise<Notification | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
