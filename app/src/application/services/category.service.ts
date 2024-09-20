import { injectable, inject } from 'tsyringe';
import type { ICategoryRepository } from '../../domain/repositories/category.repository';
import { ICategoryRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Category } from '../../domain/entities/category.entity';
import { Product } from '../../domain/entities/product.entity';

/**
 * Service class for handling Category-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class CategoryService {
    /**
     * Constructor for CategoryService.
     * Injects the repository dependency.
     *
     * @param categoryRepository - The repository that handles Category data operations.
     */
    constructor(
        @inject(ICategoryRepositoryToken)
        private readonly categoryRepository: ICategoryRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param category - The Category required by the repository method.
     * @returns Promise<Category> - The result from the repository method.
     */
    public async create(category: Category): Promise<Category> {
        return await this.categoryRepository.create(category);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Category | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Category | null> {
        return await this.categoryRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param data - The Partial required by the repository method.
     * @returns Promise<Category> - The result from the repository method.
     */
    public async update(
        id: number,
        data: Partial<Category>
    ): Promise<Category> {
        return await this.categoryRepository.update(id, data);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.categoryRepository.delete(id);
    }

    /**
     * Service method for getChildren.
     * Calls the repository's getChildren method.
     * @param parentId - The number required by the repository method.
     * @returns Promise<Category[]> - The result from the repository method.
     */
    public async getChildren(parentId: number): Promise<Category[]> {
        return await this.categoryRepository.getChildren(parentId);
    }

    /**
     * Service method for getProducts.
     * Calls the repository's getProducts method.
     * @param categoryId - The number required by the repository method.
     * @returns Promise<Product[]> - The result from the repository method.
     */
    public async getProducts(categoryId: number): Promise<Product[]> {
        return await this.categoryRepository.getProducts(categoryId);
    }

    /**
     * Service method for setParent.
     * Calls the repository's setParent method.
     * @param id - The number required by the repository method.
     * @param newParentId - The number required by the repository method.
     * @returns Promise<Category> - The result from the repository method.
     */
    public async setParent(id: number, newParentId: number): Promise<Category> {
        return await this.categoryRepository.setParent(id, newParentId);
    }

    /**
     * Service method for exists.
     * Calls the repository's exists method.
     * @param name - The string required by the repository method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async exists(name: string, shopId: number): Promise<boolean> {
        return await this.categoryRepository.exists(name, shopId);
    }

    /**
     * Service method for getTopLevelCategories.
     * Calls the repository's getTopLevelCategories method.
     * @returns Promise<Category[]> - The result from the repository method.
     */
    public async getTopLevelCategories(): Promise<Category[]> {
        return await this.categoryRepository.getTopLevelCategories();
    }

    /**
     * Service method for getCategoryHierarchy.
     * Calls the repository's getCategoryHierarchy method.
     * @param categoryId - The number required by the repository method.
     * @returns Promise<Category[]> - The result from the repository method.
     */
    public async getCategoryHierarchy(categoryId: number): Promise<Category[]> {
        return await this.categoryRepository.getCategoryHierarchy(categoryId);
    }
}
