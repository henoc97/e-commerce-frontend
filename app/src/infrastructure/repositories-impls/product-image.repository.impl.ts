import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    DOES_PRODUCT_IMAGE_EXIST,
    COUNT_PRODUCT_IMAGES,
    CREATE_PRODUCT_IMAGE,
    DELETE_PRODUCT_IMAGE,
    DELETE_PRODUCT_IMAGES_BY_PRODUCT_ID,
    FETCH_PRIMARY_PRODUCT_IMAGE,
    FETCH_PRODUCT_IMAGE_BY_ID,
    FETCH_PRODUCT_IMAGES_BY_PRODUCT_ID,
    UPDATE_PRODUCT_IMAGE_URL,
    UPDATE_PRODUCT_IMAGE,
} from '../config/graphql/queries/product-image.queries';
import { ProductImage } from '../../domain/entities/product-image.entity';
import { IProductImageRepository } from '../../domain/repositories/product-image.repository';

@injectable()
export class ProductImageRepositoryImpl implements IProductImageRepository {
    async create(image: ProductImage): Promise<ProductImage> {
        const { data } = await client.mutate({
            mutation: CREATE_PRODUCT_IMAGE,
            variables: { imageDTO: image },
        });
        return data.createProductImage;
    }

    async getById(id: number): Promise<ProductImage | null> {
        const { data } = await client.query({
            query: FETCH_PRODUCT_IMAGE_BY_ID,
            variables: { id },
        });
        return data.fetchProductImageById;
    }

    async update(id: number, updates: Partial<ProductImage>): Promise<ProductImage> {
        const { data } = await client.mutate({
            mutation: UPDATE_PRODUCT_IMAGE,
            variables: { id, updates },
        });
        return data.updateProductImage;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_PRODUCT_IMAGE,
            variables: { id },
        });
        return data.deleteProductImage;
    }

    async getByProductId(productId: number): Promise<ProductImage[]> {
        const { data } = await client.query({
            query: FETCH_PRODUCT_IMAGES_BY_PRODUCT_ID,
            variables: { productId },
        });
        return data.fetchProductImagesByProductId;
    }

    async deleteByProductId(productId: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_PRODUCT_IMAGES_BY_PRODUCT_ID,
            variables: { productId },
        });
        return data.deleteProductImagesByProductId;
    }

    async updateUrl(id: number, url: string): Promise<ProductImage> {
        const { data } = await client.mutate({
            mutation: UPDATE_PRODUCT_IMAGE_URL,
            variables: { id, url },
        });
        return data.updateProductImageUrl;
    }

    async exists(productId: number, url: string): Promise<boolean> {
        const { data } = await client.query({
            query: DOES_PRODUCT_IMAGE_EXIST,
            variables: { productId, url },
        });
        return data.doesProductImageExist;
    }

    async getPrimaryImage(productId: number): Promise<ProductImage | null> {
        const { data } = await client.query({
            query: FETCH_PRIMARY_PRODUCT_IMAGE,
            variables: { productId },
        });
        return data.fetchPrimaryProductImage;
    }

    async countImagesByProductId(productId: number): Promise<number> {
        const { data } = await client.query({
            query: COUNT_PRODUCT_IMAGES,
            variables: { productId },
        });
        return data.countProductImages;
    }
}
