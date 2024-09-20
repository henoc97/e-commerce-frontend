import { injectable, inject } from 'tsyringe';
import type { IProductVariantRepository } from '../../domain/repositories/product-variant.repository';
import { IProductVariantRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { ProductVariant } from '../../domain/entities/product-variant.entity';

/**
 * Service class for handling ProductVariant-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class ProductVariantService {
    /**
     * Constructor for ProductVariantService.
     * Injects the repository dependency.
     *
     * @param productVariantRepository - The repository that handles ProductVariant data operations.
     */
    constructor(
        @inject(IProductVariantRepositoryToken)
        private readonly productVariantRepository: IProductVariantRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param variant - The ProductVariant required by the repository method.
     * @returns Promise<ProductVariant> - The result from the repository method.
     */
    public async create(variant: ProductVariant): Promise<ProductVariant> {
        return await this.productVariantRepository.create(variant);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<ProductVariant | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<ProductVariant | null> {
        return await this.productVariantRepository.getById(id);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.productVariantRepository.delete(id);
    }

    /**
     * Service method for getByProductId.
     * Calls the repository's getByProductId method.
     * @param productId - The number required by the repository method.
     * @returns Promise<ProductVariant[]> - The result from the repository method.
     */
    public async getByProductId(productId: number): Promise<ProductVariant[]> {
        return await this.productVariantRepository.getByProductId(productId);
    }

    /**
     * Service method for deleteByProductId.
     * Calls the repository's deleteByProductId method.
     * @param productId - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async deleteByProductId(productId: number): Promise<boolean> {
        return await this.productVariantRepository.deleteByProductId(productId);
    }

    /**
     * Service method for exists.
     * Calls the repository's exists method.
     * @param productId - The number required by the repository method.
     * @param name - The string required by the repository method.
     * @param value - The string required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async exists(
        productId: number,
        name: string,
        value: string
    ): Promise<boolean> {
        return await this.productVariantRepository.exists(
            productId,
            name,
            value
        );
    }

    /**
     * Service method for getByName.
     * Calls the repository's getByName method.
     * @param productId - The number required by the repository method.
     * @param name - The string required by the repository method.
     * @returns Promise<ProductVariant[]> - The result from the repository method.
     */
    public async getByName(
        productId: number,
        name: string
    ): Promise<ProductVariant[]> {
        return await this.productVariantRepository.getByName(productId, name);
    }

    /**
     * Service method for getMostPopularVariant.
     * Calls the repository's getMostPopularVariant method.
     * @param productId - The number required by the repository method.
     * @returns Promise<ProductVariant | null> - The result from the repository method.
     */
    public async getMostPopularVariant(
        productId: number
    ): Promise<ProductVariant | null> {
        return await this.productVariantRepository.getMostPopularVariant(
            productId
        );
    }
}
