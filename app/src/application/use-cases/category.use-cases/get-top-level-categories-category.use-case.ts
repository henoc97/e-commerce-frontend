import { CategoryService } from '../../services/category.service';
import { Category } from '../../../domain/entities/category.entity';

/**
 * Use case class for getTopLevelCategories.
 * This class encapsulates the business logic for getTopLevelCategories.
 * It interacts with the Category service to perform operations on the category repository.
 */
export class GetTopLevelCategoriesCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the getTopLevelCategories use case.
     * @returns A promise with the service result of type Promise<Category[]>.
     */
    async execute(): Promise<Category[]> {
        const result = await this.service.getTopLevelCategories();

        return result;
    }
}
