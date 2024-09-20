import { CategoryService } from '../../services/category.service';
import { Category } from '../../../domain/entities/category.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for setParent.
 * This class encapsulates the business logic for setParent.
 * It interacts with the Category service to perform operations on the category repository.
 */
@injectable()
export class SetParentCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the setParent use case.
     * @param id - The number required by the service method.
     * @param newParentId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Category>.
     */
    async execute(id: number, newParentId: number): Promise<Category> {
        const result = await this.service.setParent(id, newParentId);

        return result;
    }
}
