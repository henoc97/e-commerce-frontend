import { CategoryService } from '../../services/category.service';

/**
 * Use case class for exists.
 * This class encapsulates the business logic for exists.
 * It interacts with the Category service to perform operations on the category repository.
 */
export class ExistsCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the exists use case.
     * @param name - The string required by the service method.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(name: string, shopId: number): Promise<boolean> {
        const result = await this.service.exists(name, shopId);

        return result;
    }
}
