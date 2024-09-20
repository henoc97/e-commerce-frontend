import { CategoryService } from '../../services/category.service';
import { Category } from '../../../domain/entities/category.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getCategoryHierarchy.
 * This class encapsulates the business logic for getCategoryHierarchy.
 * It interacts with the Category service to perform operations on the category repository.
 */
@injectable()
export class GetCategoryHierarchyCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the getCategoryHierarchy use case.
     * @param categoryId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Category[]>.
     */
    async execute(categoryId: number): Promise<Category[]> {
        const result = await this.service.getCategoryHierarchy(categoryId);

        return result;
    }
}
