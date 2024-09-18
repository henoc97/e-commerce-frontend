import { IProductRepository } from '../../domain/repositories/product.repository';
import { Product } from '../../domain/entities/product.entity';
import { Promotion } from '../../domain/entities/promotion.entity';
import { ProductImage } from '../../domain/entities/product-image.entity';
import { ProductVariant } from '../../domain/entities/product-variant.entity';
import { Review } from '../../domain/entities/review.entity';
import { CartItem } from '../../domain/entities/cart-item.entity';

/**
 * Service class for handling Product-related operations.
 * It provides methods that call the underlying repository.
 */
export class ProductService {
    /**
     * Constructor for ProductService.
     * Injects the repository dependency.
     *
     * @param productRepository - The repository that handles Product data operations.
     */
    constructor(private readonly productRepository: IProductRepository) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param product - The Product required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async create(product: Product): Promise<Product> {
        return await this.productRepository.create(product);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Product | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Product | null> {
        return await this.productRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<Product>
    ): Promise<Product> {
        return await this.productRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.productRepository.delete(id);
    }

    /**
     * Service method for findByName.
     * Calls the repository's findByName method.
     * @param name - The string required by the repository method.
     * @returns Promise<Product[]> - The result from the repository method.
     */
    public async findByName(name: string): Promise<Product[]> {
        return await this.productRepository.findByName(name);
    }

    /**
     * Service method for findByCategory.
     * Calls the repository's findByCategory method.
     * @param categoryId - The number required by the repository method.
     * @returns Promise<Product[]> - The result from the repository method.
     */
    public async findByCategory(categoryId: number): Promise<Product[]> {
        return await this.productRepository.findByCategory(categoryId);
    }

    /**
     * Service method for addPromotion.
     * Calls the repository's addPromotion method.
     * @param productId - The number required by the repository method.
     * @param promotion - The Promotion required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async addPromotion(
        productId: number,
        promotion: Promotion
    ): Promise<Product> {
        return await this.productRepository.addPromotion(productId, promotion);
    }

    /**
     * Service method for removePromotion.
     * Calls the repository's removePromotion method.
     * @param productId - The number required by the repository method.
     * @param promotionId - The number required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async removePromotion(
        productId: number,
        promotionId: number
    ): Promise<Product> {
        return await this.productRepository.removePromotion(
            productId,
            promotionId
        );
    }

    /**
     * Service method for addImage.
     * Calls the repository's addImage method.
     * @param productId - The number required by the repository method.
     * @param image - The ProductImage required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async addImage(
        productId: number,
        image: ProductImage
    ): Promise<Product> {
        return await this.productRepository.addImage(productId, image);
    }

    /**
     * Service method for removeImage.
     * Calls the repository's removeImage method.
     * @param productId - The number required by the repository method.
     * @param imageId - The number required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async removeImage(
        productId: number,
        imageId: number
    ): Promise<Product> {
        return await this.productRepository.removeImage(productId, imageId);
    }

    /**
     * Service method for addVariant.
     * Calls the repository's addVariant method.
     * @param productId - The number required by the repository method.
     * @param variant - The ProductVariant required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async addVariant(
        productId: number,
        variant: ProductVariant
    ): Promise<Product> {
        return await this.productRepository.addVariant(productId, variant);
    }

    /**
     * Service method for removeVariant.
     * Calls the repository's removeVariant method.
     * @param productId - The number required by the repository method.
     * @param variantId - The number required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async removeVariant(
        productId: number,
        variantId: number
    ): Promise<Product> {
        return await this.productRepository.removeVariant(productId, variantId);
    }

    /**
     * Service method for updateStock.
     * Calls the repository's updateStock method.
     * @param productId - The number required by the repository method.
     * @param quantity - The number required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async updateStock(
        productId: number,
        quantity: number
    ): Promise<Product> {
        return await this.productRepository.updateStock(productId, quantity);
    }

    /**
     * Service method for addReview.
     * Calls the repository's addReview method.
     * @param productId - The number required by the repository method.
     * @param review - The Review required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async addReview(
        productId: number,
        review: Review
    ): Promise<Product> {
        return await this.productRepository.addReview(productId, review);
    }

    /**
     * Service method for getReviews.
     * Calls the repository's getReviews method.
     * @param productId - The number required by the repository method.
     * @returns Promise<Review[]> - The result from the repository method.
     */
    public async getReviews(productId: number): Promise<Review[]> {
        return await this.productRepository.getReviews(productId);
    }

    /**
     * Service method for addCartItem.
     * Calls the repository's addCartItem method.
     * @param productId - The number required by the repository method.
     * @param cartItem - The CartItem required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async addCartItem(
        productId: number,
        cartItem: CartItem
    ): Promise<Product> {
        return await this.productRepository.addCartItem(productId, cartItem);
    }

    /**
     * Service method for findByPriceRange.
     * Calls the repository's findByPriceRange method.
     * @param minPrice - The number required by the repository method.
     * @param maxPrice - The number required by the repository method.
     * @returns Promise<Product[]> - The result from the repository method.
     */
    public async findByPriceRange(
        minPrice: number,
        maxPrice: number
    ): Promise<Product[]> {
        return await this.productRepository.findByPriceRange(
            minPrice,
            maxPrice
        );
    }

    /**
     * Service method for getFeaturedProducts.
     * Calls the repository's getFeaturedProducts method.
     * @returns Promise<Product[]> - The result from the repository method.
     */
    public async getFeaturedProducts(): Promise<Product[]> {
        return await this.productRepository.getFeaturedProducts();
    }
}
