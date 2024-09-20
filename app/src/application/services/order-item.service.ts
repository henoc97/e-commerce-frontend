import { injectable, inject } from 'tsyringe';
import type { IOrderItemRepository } from '../../domain/repositories/order-item.repository';
import { IOrderItemRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { OrderItem } from '../../domain/entities/order-item.entity';

/**
 * Service class for handling OrderItem-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class OrderItemService {
    /**
     * Constructor for OrderItemService.
     * Injects the repository dependency.
     *
     * @param orderItemRepository - The repository that handles OrderItem data operations.
     */
    constructor(
        @inject(IOrderItemRepositoryToken)
        private readonly orderItemRepository: IOrderItemRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param item - The OrderItem required by the repository method.
     * @returns Promise<OrderItem> - The result from the repository method.
     */
    public async create(item: OrderItem): Promise<OrderItem> {
        return await this.orderItemRepository.create(item);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<OrderItem | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<OrderItem | null> {
        return await this.orderItemRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<OrderItem> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<OrderItem>
    ): Promise<OrderItem> {
        return await this.orderItemRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.orderItemRepository.delete(id);
    }

    /**
     * Service method for getByOrderId.
     * Calls the repository's getByOrderId method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<OrderItem[]> - The result from the repository method.
     */
    public async getByOrderId(orderId: number): Promise<OrderItem[]> {
        return await this.orderItemRepository.getByOrderId(orderId);
    }

    /**
     * Service method for getByProductId.
     * Calls the repository's getByProductId method.
     * @param productId - The number required by the repository method.
     * @returns Promise<OrderItem[]> - The result from the repository method.
     */
    public async getByProductId(productId: number): Promise<OrderItem[]> {
        return await this.orderItemRepository.getByProductId(productId);
    }

    /**
     * Service method for calculateTotalPrice.
     * Calls the repository's calculateTotalPrice method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async calculateTotalPrice(orderId: number): Promise<number> {
        return await this.orderItemRepository.calculateTotalPrice(orderId);
    }

    /**
     * Service method for getRecentItems.
     * Calls the repository's getRecentItems method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<OrderItem[]> - The result from the repository method.
     */
    public async getRecentItems(orderId: number): Promise<OrderItem[]> {
        return await this.orderItemRepository.getRecentItems(orderId);
    }

    /**
     * Service method for getLowStockItems.
     * Calls the repository's getLowStockItems method.
     * @param threshold - The number required by the repository method.
     * @returns Promise<OrderItem[]> - The result from the repository method.
     */
    public async getLowStockItems(threshold: number): Promise<OrderItem[]> {
        return await this.orderItemRepository.getLowStockItems(threshold);
    }
}
