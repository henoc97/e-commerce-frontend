import { injectable, inject } from 'tsyringe';
import type { IReviewRepository } from '../../domain/repositories/review.repository';
import { IReviewRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Review } from '../../domain/entities/review.entity';

/**
 * Service class for handling Review-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class ReviewService {
    /**
     * Constructor for ReviewService.
     * Injects the repository dependency.
     *
     * @param reviewRepository - The repository that handles Review data operations.
     */
    constructor(
        @inject(IReviewRepositoryToken)
        private readonly reviewRepository: IReviewRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param review - The Review required by the repository method.
     * @returns Promise<Review> - The result from the repository method.
     */
    public async create(review: Review): Promise<Review> {
        return await this.reviewRepository.create(review);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Review | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Review | null> {
        return await this.reviewRepository.getById(id);
    }

    /**
     * Service method for modify.
     * Calls the repository's modify method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Review> - The result from the repository method.
     */
    public async modify(id: number, updates: Partial<Review>): Promise<Review> {
        return await this.reviewRepository.modify(id, updates);
    }

    /**
     * Service method for remove.
     * Calls the repository's remove method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async remove(id: number): Promise<boolean> {
        return await this.reviewRepository.remove(id);
    }

    /**
     * Service method for getByProduct.
     * Calls the repository's getByProduct method.
     * @param productId - The number required by the repository method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getByProduct(productId: number): Promise<Review[]> {
        return await this.reviewRepository.getByProduct(productId);
    }

    /**
     * Service method for getByUser.
     * Calls the repository's getByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getByUser(userId: number): Promise<Review[]> {
        return await this.reviewRepository.getByUser(userId);
    }

    /**
     * Service method for getByRating.
     * Calls the repository's getByRating method.
     * @param rating - The number required by the repository method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getByRating(rating: number): Promise<Review[]> {
        return await this.reviewRepository.getByRating(rating);
    }

    /**
     * Service method for getByDateRange.
     * Calls the repository's getByDateRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getByDateRange(
        startDate: Date,
        endDate: Date
    ): Promise<Review[]> {
        return await this.reviewRepository.getByDateRange(startDate, endDate);
    }

    /**
     * Service method for verify.
     * Calls the repository's verify method.
     * @param id - The number required by the repository method.
     * @returns Promise<Review> - The result from the repository method.
     */
    public async verify(id: number): Promise<Review> {
        return await this.reviewRepository.verify(id);
    }

    /**
     * Service method for flag.
     * Calls the repository's flag method.
     * @param id - The number required by the repository method.
     * @returns Promise<Review> - The result from the repository method.
     */
    public async flag(id: number): Promise<Review> {
        return await this.reviewRepository.flag(id);
    }

    /**
     * Service method for getFlagged.
     * Calls the repository's getFlagged method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getFlagged(): Promise<Review[]> {
        return await this.reviewRepository.getFlagged();
    }

    /**
     * Service method for getPopular.
     * Calls the repository's getPopular method.
     * @param limit - The number required by the repository method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getPopular(limit: number): Promise<Review[]> {
        return await this.reviewRepository.getPopular(limit);
    }

    /**
     * Service method for getAverageRating.
     * Calls the repository's getAverageRating method.
     * @param productId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getAverageRating(productId: number): Promise<number> {
        return await this.reviewRepository.getAverageRating(productId);
    }
}
