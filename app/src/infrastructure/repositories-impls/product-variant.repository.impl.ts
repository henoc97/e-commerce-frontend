import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CHECK_PRODUCT_VARIANT_EXISTENCE,
    CREATE_PRODUCT_VARIANT,
    DELETE_PRODUCT_VARIANT,
    DELETE_PRODUCT_VARIANTS_BY_PRODUCT_ID,
    FETCH_MOST_POPULAR_VARIANT,
    FETCH_PRODUCT_VARIANT_BY_ID,
    FETCH_PRODUCT_VARIANTS_BY_NAME,
    FETCH_PRODUCT_VARIANTS_BY_PRODUCT_ID,
    UPDATE_PRODUCT_VARIANT_DETAILS,
} from '../config/graphql/queries/product-variant.queries';
import { ProductVariant } from '../../domain/entities/product-variant.entity';
import { IProductVariantRepository } from '../../domain/repositories/product-variant.repository';

@injectable()
export class ProductVariantRepositoryImpl implements IProductVariantRepository {
    async doesVariantExist(productId: number, name: string, value: string): Promise<boolean> {
        const { data } = await client.query({
            query: CHECK_PRODUCT_VARIANT_EXISTENCE,
            variables: { productId, name, value },
        });
        return data.checkProductVariantExistence;
    }

    async create(variant: ProductVariant): Promise<ProductVariant> {
        const { data } = await client.mutate({
            mutation: CREATE_PRODUCT_VARIANT,
            variables: { variantDTO: variant },
        });
        return data.createProductVariant;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_PRODUCT_VARIANT,
            variables: { id },
        });
        return data.deleteProductVariant;
    }

    async deleteByProductId(productId: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_PRODUCT_VARIANTS_BY_PRODUCT_ID,
            variables: { productId },
        });
        return data.deleteProductVariantsByProductId;
    }

    async fetchMostPopularVariant(productId: number): Promise<ProductVariant | null> {
        const { data } = await client.query({
            query: FETCH_MOST_POPULAR_VARIANT,
            variables: { productId },
        });
        return data.fetchMostPopularVariant;
    }

    async getById(id: number): Promise<ProductVariant | null> {
        const { data } = await client.query({
            query: FETCH_PRODUCT_VARIANT_BY_ID,
            variables: { id },
        });
        return data.fetchProductVariantById;
    }

    async getByName(productId: number, name: string): Promise<ProductVariant[]> {
        const { data } = await client.query({
            query: FETCH_PRODUCT_VARIANTS_BY_NAME,
            variables: { productId, name },
        });
        return data.fetchProductVariantsByName;
    }

    async getByProductId(productId: number): Promise<ProductVariant[]> {
        const { data } = await client.query({
            query: FETCH_PRODUCT_VARIANTS_BY_PRODUCT_ID,
            variables: { productId },
        });
        return data.fetchProductVariantsByProductId;
    }

    async updateDetails(id: number, updateData: Partial<ProductVariant>): Promise<ProductVariant> {
        const { data } = await client.mutate({
            mutation: UPDATE_PRODUCT_VARIANT_DETAILS,
            variables: { id, updateData },
        });
        return data.updateProductVariantDetails;
    }
}
