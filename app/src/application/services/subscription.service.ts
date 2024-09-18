import { ISubscriptionRepository } from '../../domain/repositories/subscription.repository';
import { Subscription } from '../../domain/entities/subscription.entity';

/**
 * Service class for handling Subscription-related operations.
 * It provides methods that call the underlying repository.
 */
export class SubscriptionService {
    /**
     * Constructor for SubscriptionService.
     * Injects the repository dependency.
     *
     * @param subscriptionRepository - The repository that handles Subscription data operations.
     */
    constructor(
        private readonly subscriptionRepository: ISubscriptionRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param subscription - The Subscription required by the repository method.
     * @returns Promise<Subscription> - The result from the repository method.
     */
    public async create(subscription: Subscription): Promise<Subscription> {
        return await this.subscriptionRepository.create(subscription);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Subscription | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Subscription | null> {
        return await this.subscriptionRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Subscription> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<Subscription>
    ): Promise<Subscription> {
        return await this.subscriptionRepository.update(
            id,
            updates
        );
    }

    /**
     * Service method for remove.
     * Calls the repository's remove method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async remove(id: number): Promise<boolean> {
        return await this.subscriptionRepository.remove(id);
    }

    /**
     * Service method for getByVendor.
     * Calls the repository's getByVendor method.
     * @param vendorId - The number required by the repository method.
     * @returns Promise<Subscription[]> - The result from the repository method.
     */
    public async getByVendor(vendorId: number): Promise<Subscription[]> {
        return await this.subscriptionRepository.getByVendor(vendorId);
    }

    /**
     * Service method for getByPriceRange.
     * Calls the repository's getByPriceRange method.
     * @param minPrice - The number required by the repository method.
     * @param maxPrice - The number required by the repository method.
     * @returns Promise<Subscription[]> - The result from the repository method.
     */
    public async getByPriceRange(
        minPrice: number,
        maxPrice: number
    ): Promise<Subscription[]> {
        return await this.subscriptionRepository.getByPriceRange(
            minPrice,
            maxPrice
        );
    }

    /**
     * Service method for getActive.
     * Calls the repository's getActive method.
     * @returns Promise<Subscription[]> - The result from the repository method.
     */
    public async getActive(): Promise<Subscription[]> {
        return await this.subscriptionRepository.getActive();
    }

    /**
     * Service method for getExpired.
     * Calls the repository's getExpired method.
     * @returns Promise<Subscription[]> - The result from the repository method.
     */
    public async getExpired(): Promise<Subscription[]> {
        return await this.subscriptionRepository.getExpired();
    }

    /**
     * Service method for getExpiringSoon.
     * Calls the repository's getExpiringSoon method.
     * @param days - The number required by the repository method.
     * @returns Promise<Subscription[]> - The result from the repository method.
     */
    public async getExpiringSoon(days: number): Promise<Subscription[]> {
        return await this.subscriptionRepository.getExpiringSoon(days);
    }

    /**
     * Service method for getLatest.
     * Calls the repository's getLatest method.
     * @returns Promise<Subscription> - The result from the repository method.
     */
    public async getLatest(): Promise<Subscription> {
        return await this.subscriptionRepository.getLatest();
    }

    /**
     * Service method for countByVendor.
     * Calls the repository's countByVendor method.
     * @param vendorId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async countByVendor(vendorId: number): Promise<number> {
        return await this.subscriptionRepository.countByVendor(vendorId);
    }
}
