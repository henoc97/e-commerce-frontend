import { CategoryService } from '../../services/category.service';
import { Category } from '../../../domain/entities/category.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Category service to perform operations on the category repository.
 */
@injectable()
export class CreateCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the create use case.
     * @param category - The Category required by the service method.
     * @returns A promise with the service result of type Promise<Category>.
     */
    async execute(category: Category): Promise<Category> {
        const result = await this.service.create(category);

        return result;
    }
}
