import { injectable, inject } from 'tsyringe';
import type { IUserRepository } from '../../domain/repositories/user.repository';
import { IUserRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { User } from '../../domain/entities/user.entity';
import { Address } from '../../domain/entities/address.entity';
import { Order } from '../../domain/entities/order.entity';
import { Notification } from '../../domain/entities/notification.entity';
import { Subsite } from '../../domain/entities/subsite.entity';
import { AuditLog } from '../../domain/entities/audit-log.entity';
import { Review } from '../../domain/entities/review.entity';
import { Cart } from '../../domain/entities/cart.entity';
import { Ticket } from '../../domain/entities/ticket.entity';

/**
 * Service class for handling User-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class UserService {
    /**
     * Constructor for UserService.
     * Injects the repository dependency.
     *
     * @param userRepository - The repository that handles User data operations.
     */
    constructor(
        @inject(IUserRepositoryToken)
        private readonly userRepository: IUserRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param user - The User required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async create(user: User): Promise<User> {
        return await this.userRepository.create(user);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<User | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<User | null> {
        return await this.userRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async update(id: number, updates: Partial<User>): Promise<User> {
        return await this.userRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.userRepository.delete(id);
    }

    /**
     * Service method for getByRole.
     * Calls the repository's getByRole method.
     * @param role - The UserRole required by the repository method.
     * @returns Promise<User[]> - The result from the repository method.
     */
    public async getByRole(role: UserRole): Promise<User[]> {
        return await this.userRepository.getByRole(role);
    }

    /**
     * Service method for addAddress.
     * Calls the repository's addAddress method.
     * @param userId - The number required by the repository method.
     * @param address - The Address required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async addAddress(userId: number, address: Address): Promise<User> {
        return await this.userRepository.addAddress(userId, address);
    }

    /**
     * Service method for removeAddress.
     * Calls the repository's removeAddress method.
     * @param userId - The number required by the repository method.
     * @param addressId - The number required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async removeAddress(
        userId: number,
        addressId: number
    ): Promise<User> {
        return await this.userRepository.removeAddress(userId, addressId);
    }

    /**
     * Service method for addOrder.
     * Calls the repository's addOrder method.
     * @param userId - The number required by the repository method.
     * @param order - The Order required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async addOrder(userId: number, order: Order): Promise<User> {
        return await this.userRepository.addOrder(userId, order);
    }

    /**
     * Service method for removeOrder.
     * Calls the repository's removeOrder method.
     * @param userId - The number required by the repository method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async removeOrder(userId: number, orderId: number): Promise<User> {
        return await this.userRepository.removeOrder(userId, orderId);
    }

    /**
     * Service method for addNotification.
     * Calls the repository's addNotification method.
     * @param userId - The number required by the repository method.
     * @param notification - The Notification required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async addNotification(
        userId: number,
        notification: Notification
    ): Promise<User> {
        return await this.userRepository.addNotification(userId, notification);
    }

    /**
     * Service method for removeNotification.
     * Calls the repository's removeNotification method.
     * @param userId - The number required by the repository method.
     * @param notificationId - The number required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async removeNotification(
        userId: number,
        notificationId: number
    ): Promise<User> {
        return await this.userRepository.removeNotification(
            userId,
            notificationId
        );
    }

    /**
     * Service method for addSubsite.
     * Calls the repository's addSubsite method.
     * @param userId - The number required by the repository method.
     * @param Subsite - The Subsite required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async addSubsite(userId: number, Subsite: Subsite): Promise<User> {
        return await this.userRepository.addSubsite(userId, Subsite);
    }

    /**
     * Service method for removeSubsite.
     * Calls the repository's removeSubsite method.
     * @param userId - The number required by the repository method.
     * @param SubsiteId - The number required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async removeSubsite(
        userId: number,
        SubsiteId: number
    ): Promise<User> {
        return await this.userRepository.removeSubsite(userId, SubsiteId);
    }

    /**
     * Service method for getActivityLog.
     * Calls the repository's getActivityLog method.
     * @param userId - The number required by the repository method.
     * @returns Promise<UserActivity[]> - The result from the repository method.
     */
    public async getActivityLog(userId: number): Promise<UserActivity[]> {
        return await this.userRepository.getActivityLog(userId);
    }

    /**
     * Service method for createAuditLog.
     * Calls the repository's createAuditLog method.
     * @param userId - The number required by the repository method.
     * @param auditLog - The AuditLog required by the repository method.
     * @returns Promise<void> - The result from the repository method.
     */
    public async createAuditLog(
        userId: number,
        auditLog: AuditLog
    ): Promise<void> {
        return await this.userRepository.createAuditLog(userId, auditLog);
    }

    /**
     * Service method for getAuditLogs.
     * Calls the repository's getAuditLogs method.
     * @param userId - The number required by the repository method.
     * @returns Promise<AuditLog[]> - The result from the repository method.
     */
    public async getAuditLogs(userId: number): Promise<AuditLog[]> {
        return await this.userRepository.getAuditLogs(userId);
    }

    /**
     * Service method for getByEmail.
     * Calls the repository's getByEmail method.
     * @param email - The string required by the repository method.
     * @returns Promise<User | null> - The result from the repository method.
     */
    public async getByEmail(email: string): Promise<User | null> {
        return await this.userRepository.getByEmail(email);
    }

    /**
     * Service method for updateProfile.
     * Calls the repository's updateProfile method.
     * @param userId - The number required by the repository method.
     * @param profile - The UserProfile required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async updateProfile(
        userId: number,
        profile: UserProfile
    ): Promise<User> {
        return await this.userRepository.updateProfile(userId, profile);
    }

    /**
     * Service method for updatePassword.
     * Calls the repository's updatePassword method.
     * @param userId - The number required by the repository method.
     * @param newPassword - The string required by the repository method.
     * @returns Promise<User> - The result from the repository method.
     */
    public async updatePassword(
        userId: number,
        newPassword: string
    ): Promise<User> {
        return await this.userRepository.updatePassword(userId, newPassword);
    }

    /**
     * Service method for getOrders.
     * Calls the repository's getOrders method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async getOrders(userId: number): Promise<Order[]> {
        return await this.userRepository.getOrders(userId);
    }

    /**
     * Service method for getAddresses.
     * Calls the repository's getAddresses method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Address[]> - The result from the repository method.
     */
    public async getAddresses(userId: number): Promise<Address[]> {
        return await this.userRepository.getAddresses(userId);
    }

    /**
     * Service method for getReviews.
     * Calls the repository's getReviews method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getReviews(userId: number): Promise<Review[]> {
        return await this.userRepository.getReviews(userId);
    }

    /**
     * Service method for getCart.
     * Calls the repository's getCart method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Cart | null> - The result from the repository method.
     */
    public async getCart(userId: number): Promise<Cart | null> {
        return await this.userRepository.getCart(userId);
    }

    /**
     * Service method for getTickets.
     * Calls the repository's getTickets method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Ticket[]> - The result from the repository method.
     */
    public async getTickets(userId: number): Promise<Ticket[]> {
        return await this.userRepository.getTickets(userId);
    }

    /**
     * Service method for getNotifications.
     * Calls the repository's getNotifications method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Notification[]> - The result from the repository method.
     */
    public async getNotifications(userId: number): Promise<Notification[]> {
        return await this.userRepository.getNotifications(userId);
    }

    /**
     * Service method for getSubsites.
     * Calls the repository's getSubsites method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Subsite[]> - The result from the repository method.
     */
    public async getSubsites(userId: number): Promise<Subsite[]> {
        return await this.userRepository.getSubsites(userId);
    }

    /**
     * Service method for getActiveCount.
     * Calls the repository's getActiveCount method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getActiveCount(): Promise<number> {
        return await this.userRepository.getActiveCount();
    }

    /**
     * Service method for getCountByRole.
     * Calls the repository's getCountByRole method.
     * @param role - The UserRole required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getCountByRole(role: UserRole): Promise<number> {
        return await this.userRepository.getCountByRole(role);
    }

    /**
     * Service method for getInactiveUsers.
     * Calls the repository's getInactiveUsers method.
     * @param days - The number required by the repository method.
     * @returns Promise<User[]> - The result from the repository method.
     */
    public async getInactiveUsers(days: number): Promise<User[]> {
        return await this.userRepository.getInactiveUsers(days);
    }
}
