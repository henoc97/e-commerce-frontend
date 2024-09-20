import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for removeNotification.
 * This class encapsulates the business logic for removeNotification.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class RemoveNotificationUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the removeNotification use case.
     * @param userId - The number required by the service method.
     * @param notificationId - The number required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, notificationId: number): Promise<User> {
        const result = await this.service.removeNotification(
            userId,
            notificationId
        );

        return result;
    }
}
