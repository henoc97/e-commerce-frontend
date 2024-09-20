import { injectable, inject } from 'tsyringe';
import type { INotificationRepository } from '../../domain/repositories/notification.repository';
import { INotificationRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Notification } from '../../domain/entities/notification.entity';

/**
 * Service class for handling Notification-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class NotificationService {
    /**
     * Constructor for NotificationService.
     * Injects the repository dependency.
     *
     * @param notificationRepository - The repository that handles Notification data operations.
     */
    constructor(
        @inject(INotificationRepositoryToken)
        private readonly notificationRepository: INotificationRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param notification - The Notification required by the repository method.
     * @returns Promise<Notification> - The result from the repository method.
     */
    public async create(notification: Notification): Promise<Notification> {
        return await this.notificationRepository.create(notification);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Notification | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Notification | null> {
        return await this.notificationRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Notification> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<Notification>
    ): Promise<Notification> {
        return await this.notificationRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.notificationRepository.delete(id);
    }

    /**
     * Service method for getByUserId.
     * Calls the repository's getByUserId method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Notification[]> - The result from the repository method.
     */
    public async getByUserId(userId: number): Promise<Notification[]> {
        return await this.notificationRepository.getByUserId(userId);
    }

    /**
     * Service method for getByType.
     * Calls the repository's getByType method.
     * @param type - The NotificationType required by the repository method.
     * @returns Promise<Notification[]> - The result from the repository method.
     */
    public async getByType(type: NotificationType): Promise<Notification[]> {
        return await this.notificationRepository.getByType(type);
    }

    /**
     * Service method for getByDateRange.
     * Calls the repository's getByDateRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<Notification[]> - The result from the repository method.
     */
    public async getByDateRange(
        startDate: Date,
        endDate: Date
    ): Promise<Notification[]> {
        return await this.notificationRepository.getByDateRange(
            startDate,
            endDate
        );
    }

    /**
     * Service method for markAsRead.
     * Calls the repository's markAsRead method.
     * @param id - The number required by the repository method.
     * @returns Promise<Notification> - The result from the repository method.
     */
    public async markAsRead(id: number): Promise<Notification> {
        return await this.notificationRepository.markAsRead(id);
    }

    /**
     * Service method for countUnread.
     * Calls the repository's countUnread method.
     * @param userId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async countUnread(userId: number): Promise<number> {
        return await this.notificationRepository.countUnread(userId);
    }

    /**
     * Service method for getRecent.
     * Calls the repository's getRecent method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Notification[]> - The result from the repository method.
     */
    public async getRecent(userId: number): Promise<Notification[]> {
        return await this.notificationRepository.getRecent(userId);
    }
}
