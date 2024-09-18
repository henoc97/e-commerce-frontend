import { IOrderRepository } from '../../domain/repositories/order.repository';
import { Order } from '../../domain/entities/order.entity';
import { OrderStatus } from '../../domain/enums/order-status.enum';

/**
 * Service class for handling Order-related operations.
 * It provides methods that call the underlying repository.
 */
export class OrderService {
    /**
     * Constructor for OrderService.
     * Injects the repository dependency.
     *
     * @param orderRepository - The repository that handles Order data operations.
     */
    constructor(private readonly orderRepository: IOrderRepository) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param order - The Order required by the repository method.
     * @returns Promise<Order> - The result from the repository method.
     */
    public async create(order: Order): Promise<Order> {
        return await this.orderRepository.create(order);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Order | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Order | null> {
        return await this.orderRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Order> - The result from the repository method.
     */
    public async update(id: number, updates: Partial<Order>): Promise<Order> {
        return await this.orderRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.orderRepository.delete(id);
    }

    /**
     * Service method for getByUserId.
     * Calls the repository's getByUserId method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async getByUserId(userId: number): Promise<Order[]> {
        return await this.orderRepository.getByUserId(userId);
    }

    /**
     * Service method for getByShopId.
     * Calls the repository's getByShopId method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async getByShopId(shopId: number): Promise<Order[]> {
        return await this.orderRepository.getByShopId(shopId);
    }

    /**
     * Service method for getByStatus.
     * Calls the repository's getByStatus method.
     * @param status - The OrderStatus required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async getByStatus(status: OrderStatus): Promise<Order[]> {
        return await this.orderRepository.getByStatus(status);
    }

    /**
     * Service method for updateStatus.
     * Calls the repository's updateStatus method.
     * @param id - The number required by the repository method.
     * @param status - The OrderStatus required by the repository method.
     * @returns Promise<Order> - The result from the repository method.
     */
    public async updateStatus(id: number, status: OrderStatus): Promise<Order> {
        return await this.orderRepository.updateStatus(id, status);
    }

    /**
     * Service method for addPayment.
     * Calls the repository's addPayment method.
     * @param orderId - The number required by the repository method.
     * @param paymentId - The string required by the repository method.
     * @returns Promise<Order> - The result from the repository method.
     */
    public async addPayment(
        orderId: number,
        paymentId: string
    ): Promise<Order> {
        return await this.orderRepository.addPayment(orderId, paymentId);
    }

    /**
     * Service method for addRefund.
     * Calls the repository's addRefund method.
     * @param orderId - The number required by the repository method.
     * @param refundId - The string required by the repository method.
     * @returns Promise<Order> - The result from the repository method.
     */
    public async addRefund(orderId: number, refundId: string): Promise<Order> {
        return await this.orderRepository.addRefund(orderId, refundId);
    }

    /**
     * Service method for getByTrackingNumber.
     * Calls the repository's getByTrackingNumber method.
     * @param trackingNumber - The string required by the repository method.
     * @returns Promise<Order | null> - The result from the repository method.
     */
    public async getByTrackingNumber(
        trackingNumber: string
    ): Promise<Order | null> {
        return await this.orderRepository.getByTrackingNumber(trackingNumber);
    }

    /**
     * Service method for getByDateRange.
     * Calls the repository's getByDateRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async getByDateRange(
        startDate: Date,
        endDate: Date
    ): Promise<Order[]> {
        return await this.orderRepository.getByDateRange(startDate, endDate);
    }

    /**
     * Service method for getRecentOrdersByShop.
     * Calls the repository's getRecentOrdersByShop method.
     * @param shopId - The number required by the repository method.
     * @param limit - The number required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async getRecentOrdersByShop(
        shopId: number,
        limit: number
    ): Promise<Order[]> {
        return await this.orderRepository.getRecentOrdersByShop(shopId, limit);
    }

    /**
     * Service method for getTopOrdersByAmount.
     * Calls the repository's getTopOrdersByAmount method.
     * @param topN - The number required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async getTopOrdersByAmount(topN: number): Promise<Order[]> {
        return await this.orderRepository.getTopOrdersByAmount(topN);
    }
}
