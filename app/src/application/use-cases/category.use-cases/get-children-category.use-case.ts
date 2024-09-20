import { CategoryService } from '../../services/category.service';
import { Category } from '../../../domain/entities/category.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getChildren.
 * This class encapsulates the business logic for getChildren.
 * It interacts with the Category service to perform operations on the category repository.
 */
@injectable()
export class GetChildrenCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the getChildren use case.
     * @param parentId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Category[]>.
     */
    async execute(parentId: number): Promise<Category[]> {
        const result = await this.service.getChildren(parentId);

        return result;
    }
}
