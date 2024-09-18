import { IUserActivityRepository } from '../../domain/repositories/user-activity.repository';
import { UserActivity } from '../../domain/entities/user-activity.entity';

/**
 * Service class for handling UserActivity-related operations.
 * It provides methods that call the underlying repository.
 */
export class UserActivityService {
    /**
     * Constructor for UserActivityService.
     * Injects the repository dependency.
     *
     * @param userActivityRepository - The repository that handles UserActivity data operations.
     */
    constructor(
        private readonly userActivityRepository: IUserActivityRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param activity - The UserActivity required by the repository method.
     * @returns Promise<UserActivity> - The result from the repository method.
     */
    public async create(activity: UserActivity): Promise<UserActivity> {
        return await this.userActivityRepository.create(activity);
    }

    /**
     * Service method for findById.
     * Calls the repository's findById method.
     * @param id - The number required by the repository method.
     * @returns Promise<UserActivity | null> - The result from the repository method.
     */
    public async findById(id: number): Promise<UserActivity | null> {
        return await this.userActivityRepository.findById(id);
    }

    /**
     * Service method for listByUser.
     * Calls the repository's listByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<UserActivity[]> - The result from the repository method.
     */
    public async listByUser(userId: number): Promise<UserActivity[]> {
        return await this.userActivityRepository.listByUser(userId);
    }

    /**
     * Service method for listByProduct.
     * Calls the repository's listByProduct method.
     * @param productId - The number required by the repository method.
     * @returns Promise<UserActivity[]> - The result from the repository method.
     */
    public async listByProduct(productId: number): Promise<UserActivity[]> {
        return await this.userActivityRepository.listByProduct(productId);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param activity - The UserActivity required by the repository method.
     * @returns Promise<UserActivity> - The result from the repository method.
     */
    public async update(
        id: number,
        activity: UserActivity
    ): Promise<UserActivity> {
        return await this.userActivityRepository.update(id, activity);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.userActivityRepository.delete(id);
    }

    /**
     * Service method for listByDateRange.
     * Calls the repository's listByDateRange method.
     * @param start - The Date required by the repository method.
     * @param end - The Date required by the repository method.
     * @returns Promise<UserActivity[]> - The result from the repository method.
     */
    public async listByDateRange(
        start: Date,
        end: Date
    ): Promise<UserActivity[]> {
        return await this.userActivityRepository.listByDateRange(start, end);
    }

    /**
     * Service method for validate.
     * Calls the repository's validate method.
     * @param activity - The UserActivity required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async validate(activity: UserActivity): Promise<boolean> {
        return await this.userActivityRepository.validate(activity);
    }

    /**
     * Service method for countByUser.
     * Calls the repository's countByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async countByUser(userId: number): Promise<number> {
        return await this.userActivityRepository.countByUser(userId);
    }

    /**
     * Service method for getRecentByUser.
     * Calls the repository's getRecentByUser method.
     * @param userId - The number required by the repository method.
     * @param limit - The number required by the repository method.
     * @returns Promise<UserActivity[]> - The result from the repository method.
     */
    public async getRecentByUser(
        userId: number,
        limit: number
    ): Promise<UserActivity[]> {
        return await this.userActivityRepository.getRecentByUser(userId, limit);
    }
}
