import { ISubsiteRepository } from '../../domain/repositories/subsite.repository';
import { Subsite } from '../../domain/entities/subsite.entity';

/**
 * Service class for handling Subsite-related operations.
 * It provides methods that call the underlying repository.
 */
export class SubsiteService {
    /**
     * Constructor for SubsiteService.
     * Injects the repository dependency.
     *
     * @param subsiteRepository - The repository that handles Subsite data operations.
     */
    constructor(private readonly subsiteRepository: ISubsiteRepository) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param Subsite - The Subsite required by the repository method.
     * @returns Promise<Subsite> - The result from the repository method.
     */
    public async create(Subsite: Subsite): Promise<Subsite> {
        return await this.subsiteRepository.create(Subsite);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Subsite | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Subsite | null> {
        return await this.subsiteRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Subsite> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<Subsite>
    ): Promise<Subsite> {
        return await this.subsiteRepository.update(id, updates);
    }

    /**
     * Service method for remove.
     * Calls the repository's remove method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async remove(id: number): Promise<boolean> {
        return await this.subsiteRepository.remove(id);
    }

    /**
     * Service method for getByUser.
     * Calls the repository's getByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Subsite[]> - The result from the repository method.
     */
    public async getByUser(userId: number): Promise<Subsite[]> {
        return await this.subsiteRepository.getByUser(userId);
    }

    /**
     * Service method for validate.
     * Calls the repository's validate method.
     * @param Subsite - The Subsite required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async validate(Subsite: Subsite): Promise<boolean> {
        return await this.subsiteRepository.validate(Subsite);
    }

    /**
     * Service method for getConfig.
     * Calls the repository's getConfig method.
     * @param id - The number required by the repository method.
     * @returns Promise<any> - The result from the repository method.
     */
    public async getConfig(id: number): Promise<any> {
        return await this.subsiteRepository.getConfig(id);
    }

    /**
     * Service method for updateConfig.
     * Calls the repository's updateConfig method.
     * @param id - The number required by the repository method.
     * @param config - The any required by the repository method.
     * @returns Promise<Subsite> - The result from the repository method.
     */
    public async updateConfig(id: number, config: any): Promise<Subsite> {
        return await this.subsiteRepository.updateConfig(id, config);
    }

    /**
     * Service method for getLatest.
     * Calls the repository's getLatest method.
     * @returns Promise<Subsite> - The result from the repository method.
     */
    public async getLatest(): Promise<Subsite> {
        return await this.subsiteRepository.getLatest();
    }

    /**
     * Service method for getActive.
     * Calls the repository's getActive method.
     * @returns Promise<Subsite[]> - The result from the repository method.
     */
    public async getActive(): Promise<Subsite[]> {
        return await this.subsiteRepository.getActive();
    }

    /**
     * Service method for countByUser.
     * Calls the repository's countByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async countByUser(userId: number): Promise<number> {
        return await this.subsiteRepository.countByUser(userId);
    }
}
