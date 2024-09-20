import { injectable, inject } from 'tsyringe';
import type { IProductImageRepository } from '../../domain/repositories/product-image.repository';
import { IProductImageRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { ProductImage } from '../../domain/entities/product-image.entity';

/**
 * Service class for handling ProductImage-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class ProductImageService {
    /**
     * Constructor for ProductImageService.
     * Injects the repository dependency.
     *
     * @param productImageRepository - The repository that handles ProductImage data operations.
     */
    constructor(
        @inject(IProductImageRepositoryToken)
        private readonly productImageRepository: IProductImageRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param image - The ProductImage required by the repository method.
     * @returns Promise<ProductImage> - The result from the repository method.
     */
    public async create(image: ProductImage): Promise<ProductImage> {
        return await this.productImageRepository.create(image);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<ProductImage | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<ProductImage | null> {
        return await this.productImageRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<ProductImage> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<ProductImage>
    ): Promise<ProductImage> {
        return await this.productImageRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.productImageRepository.delete(id);
    }

    /**
     * Service method for getByProductId.
     * Calls the repository's getByProductId method.
     * @param productId - The number required by the repository method.
     * @returns Promise<ProductImage[]> - The result from the repository method.
     */
    public async getByProductId(productId: number): Promise<ProductImage[]> {
        return await this.productImageRepository.getByProductId(productId);
    }

    /**
     * Service method for deleteByProductId.
     * Calls the repository's deleteByProductId method.
     * @param productId - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async deleteByProductId(productId: number): Promise<boolean> {
        return await this.productImageRepository.deleteByProductId(productId);
    }

    /**
     * Service method for updateUrl.
     * Calls the repository's updateUrl method.
     * @param id - The number required by the repository method.
     * @param url - The string required by the repository method.
     * @returns Promise<ProductImage> - The result from the repository method.
     */
    public async updateUrl(id: number, url: string): Promise<ProductImage> {
        return await this.productImageRepository.updateUrl(id, url);
    }

    /**
     * Service method for exists.
     * Calls the repository's exists method.
     * @param productId - The number required by the repository method.
     * @param url - The string required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async exists(productId: number, url: string): Promise<boolean> {
        return await this.productImageRepository.exists(productId, url);
    }

    /**
     * Service method for getPrimaryImage.
     * Calls the repository's getPrimaryImage method.
     * @param productId - The number required by the repository method.
     * @returns Promise<ProductImage | null> - The result from the repository method.
     */
    public async getPrimaryImage(
        productId: number
    ): Promise<ProductImage | null> {
        return await this.productImageRepository.getPrimaryImage(productId);
    }

    /**
     * Service method for countImagesByProductId.
     * Calls the repository's countImagesByProductId method.
     * @param productId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async countImagesByProductId(productId: number): Promise<number> {
        return await this.productImageRepository.countImagesByProductId(
            productId
        );
    }
}
