import { INewsletterSubscriptionRepository } from '../../domain/repositories/newsletter-subscription.repository';
import { NewsletterSubscription } from '../../domain/entities/newsletter-subscription.entity';

/**
 * Service class for handling NewsletterSubscription-related operations.
 * It provides methods that call the underlying repository.
 */
export class NewsletterSubscriptionService {
    /**
     * Constructor for NewsletterSubscriptionService.
     * Injects the repository dependency.
     *
     * @param newsletterSubscriptionRepository - The repository that handles NewsletterSubscription data operations.
     */
    constructor(
        private readonly newsletterSubscriptionRepository: INewsletterSubscriptionRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param subscription - The NewsletterSubscription required by the repository method.
     * @returns Promise<NewsletterSubscription> - The result from the repository method.
     */
    public async create(
        subscription: NewsletterSubscription
    ): Promise<NewsletterSubscription> {
        return await this.newsletterSubscriptionRepository.create(subscription);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<NewsletterSubscription | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<NewsletterSubscription | null> {
        return await this.newsletterSubscriptionRepository.getById(id);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.newsletterSubscriptionRepository.delete(id);
    }

    /**
     * Service method for listAll.
     * Calls the repository's listAll method.
     * @returns Promise<NewsletterSubscription[]> - The result from the repository method.
     */
    public async listAll(): Promise<NewsletterSubscription[]> {
        return await this.newsletterSubscriptionRepository.listAll();
    }

    /**
     * Service method for getByEmail.
     * Calls the repository's getByEmail method.
     * @param email - The string required by the repository method.
     * @returns Promise<NewsletterSubscription | null> - The result from the repository method.
     */
    public async getByEmail(
        email: string
    ): Promise<NewsletterSubscription | null> {
        return await this.newsletterSubscriptionRepository.getByEmail(email);
    }

    /**
     * Service method for isSubscribed.
     * Calls the repository's isSubscribed method.
     * @param email - The string required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async isSubscribed(email: string): Promise<boolean> {
        return await this.newsletterSubscriptionRepository.isSubscribed(email);
    }

    /**
     * Service method for countAll.
     * Calls the repository's countAll method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async countAll(): Promise<number> {
        return await this.newsletterSubscriptionRepository.countAll();
    }
}
