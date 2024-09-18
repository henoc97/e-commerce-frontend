import { CategoryService } from '../../services/category.service';
import { Category } from '../../../domain/entities/category.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Category service to perform operations on the category repository.
 */
export class GetByIdCategory {
    constructor(private readonly service: CategoryService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Category | null>.
     */
    async execute(id: number): Promise<Category | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
