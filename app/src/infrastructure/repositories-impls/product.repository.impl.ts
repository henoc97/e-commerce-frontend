import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    ADD_CART_ITEM_TO_PRODUCT,
    ADD_IMAGE_TO_PRODUCT,
    ADD_PROMOTION_TO_PRODUCT,
    ADD_REVIEW_TO_PRODUCT,
    ADD_VARIANT_TO_PRODUCT,
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    FETCH_FEATURED_PRODUCTS,
    FETCH_PRODUCT_BY_ID,
    FETCH_PRODUCTS,
    FIND_PRODUCTS_BY_CATEGORY,
    FIND_PRODUCTS_BY_NAME,
    FIND_PRODUCTS_BY_PRICE_RANGE,
    REMOVE_IMAGE_FROM_PRODUCT,
    REMOVE_PROMOTION_FROM_PRODUCT,
    REMOVE_VARIANT_FROM_PRODUCT,
    UPDATE_PRODUCT_STOCK,
    UPDATE_PRODUCT,
} from '../config/graphql/queries/product.queries';
import { Product } from '../../domain/entities/product.entity';
import { CartItem } from '../../domain/entities/cart-item.entity';
import { ProductImage } from '../../domain/entities/product-image.entity';
import { ProductVariant } from '../../domain/entities/product-variant.entity';
import { Promotion } from '../../domain/entities/promotion.entity';
import { Review } from '../../domain/entities/review.entity';
import { IProductRepository } from '../../domain/repositories/product.repository';

@injectable()
export class ProductRepositoryImpl implements IProductRepository {
    async create(product: Product): Promise<Product> {
        const { data } = await client.mutate({
            mutation: CREATE_PRODUCT,
            variables: { product },
        });
        return data.createProduct;
    }

    async getById(id: number): Promise<Product | null> {
        const { data } = await client.query({
            query: FETCH_PRODUCT_BY_ID,
            variables: { productId: id },
        });
        return data.fetchProductById;
    }

    async update(id: number, updates: Partial<Product>): Promise<Product> {
        const { data } = await client.mutate({
            mutation: UPDATE_PRODUCT,
            variables: { productId: id, product: updates },
        });
        return data.updateProduct;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_PRODUCT,
            variables: { productId: id },
        });
        return data.deleteProduct;
    }

    async findByName(name: string): Promise<Product[]> {
        const { data } = await client.query({
            query: FIND_PRODUCTS_BY_NAME,
            variables: { name },
        });
        return data.findProductsByName;
    }

    async findByCategory(categoryId: number): Promise<Product[]> {
        const { data } = await client.query({
            query: FIND_PRODUCTS_BY_CATEGORY,
            variables: { categoryId },
        });
        return data.findProductsByCategory;
    }

    async addPromotion(productId: number, promotion: Promotion): Promise<Product> {
        const { data } = await client.mutate({
            mutation: ADD_PROMOTION_TO_PRODUCT,
            variables: { productId, promotion },
        });
        return data.addPromotionToProduct;
    }

    async removePromotion(productId: number, promotionId: number): Promise<Product> {
        const { data } = await client.mutate({
            mutation: REMOVE_PROMOTION_FROM_PRODUCT,
            variables: { productId, promotionId },
        });
        return data.removePromotionFromProduct;
    }

    async addImage(productId: number, image: ProductImage): Promise<Product> {
        const { data } = await client.mutate({
            mutation: ADD_IMAGE_TO_PRODUCT,
            variables: { productId, image },
        });
        return data.addImageToProduct;
    }

    async removeImage(productId: number, imageId: number): Promise<Product> {
        const { data } = await client.mutate({
            mutation: REMOVE_IMAGE_FROM_PRODUCT,
            variables: { productId, imageId },
        });
        return data.removeImageFromProduct;
    }

    async addVariant(productId: number, variant: ProductVariant): Promise<Product> {
        const { data } = await client.mutate({
            mutation: ADD_VARIANT_TO_PRODUCT,
            variables: { productId, variant },
        });
        return data.addVariantToProduct;
    }

    async removeVariant(productId: number, variantId: number): Promise<Product> {
        const { data } = await client.mutate({
            mutation: REMOVE_VARIANT_FROM_PRODUCT,
            variables: { productId, variantId },
        });
        return data.removeVariantFromProduct;
    }

    async updateStock(productId: number, quantity: number): Promise<Product> {
        const { data } = await client.mutate({
            mutation: UPDATE_PRODUCT_STOCK,
            variables: { productId, quantity },
        });
        return data.updateProductStock;
    }

    async addReview(productId: number, review: Review): Promise<Product> {
        const { data } = await client.mutate({
            mutation: ADD_REVIEW_TO_PRODUCT,
            variables: { productId, review },
        });
        return data.addReviewToProduct;
    }

    async getReviews(productId: number): Promise<Review[]> {
        const { data } = await client.query({
            query: ADD_REVIEW_TO_PRODUCT,
            variables: { productId },
        });
        return data.addReviewToProduct.reviews;
    }

    async addCartItem(productId: number, cartItem: CartItem): Promise<Product> {
        const { data } = await client.mutate({
            mutation: ADD_CART_ITEM_TO_PRODUCT,
            variables: { productId, cartItem },
        });
        return data.addCartItemToProduct;
    }

    async findByPriceRange(minPrice: number, maxPrice: number): Promise<Product[]> {
        const { data } = await client.query({
            query: FIND_PRODUCTS_BY_PRICE_RANGE,
            variables: { minPrice, maxPrice },
        });
        return data.findProductsByPriceRange;
    }

    async getFeaturedProducts(): Promise<Product[]> {
        const { data } = await client.query({
            query: FETCH_FEATURED_PRODUCTS,
        });
        return data.fetchFeaturedProducts;
    }
}
