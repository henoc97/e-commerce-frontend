import { CategoryService } from '../../services/category.service';
import { Category } from '../../../domain/entities/category.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Category service to perform operations on the category repository.
 */
export class UpdateCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param data - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Category>.
     */
    async execute(id: number, data: Partial<Category>): Promise<Category> {
        const result = await this.service.update(id, data);

        return result;
    }
}
