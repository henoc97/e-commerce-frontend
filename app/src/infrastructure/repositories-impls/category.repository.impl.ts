import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CHECK_CATEGORY_EXISTENCE,
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    FETCH_CATEGORY_BY_ID,
    FETCH_CATEGORY_HIERARCHY,
    FETCH_CHILDREN,
    FETCH_PRODUCTS,
    FETCH_TOP_LEVEL_CATEGORIES,
    SET_PARENT,
    UPDATE_CATEGORY,
} from '../config/graphql/queries/category.queries';
import { Category } from '../../domain/entities/category.entity';
import { Product } from '../../domain/entities/product.entity';
import { ICategoryRepository } from '../../domain/repositories/category.repository';

@injectable()
export class CategoryRepositoryImpl implements ICategoryRepository {
    async create(category: Category): Promise<Category> {
        const { data } = await client.mutate({
            mutation: CREATE_CATEGORY,
            variables: { categoryDTO: category },
        });
        return data.createCategory;
    }

    async getById(id: number): Promise<Category | null> {
        const { data } = await client.query({
            query: FETCH_CATEGORY_BY_ID,
            variables: { id },
        });
        return data.categoryById;
    }

    async update(id: number, data: Partial<Category>): Promise<Category> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_CATEGORY,
            variables: { id, categoryDTO: data },
        });
        return updatedData.updateCategory;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_CATEGORY,
            variables: { id },
        });
        return data.deleteCategory;
    }

    async getChildren(parentId: number): Promise<Category[]> {
        const { data } = await client.query({
            query: FETCH_CHILDREN,
            variables: { parentId },
        });
        return data.children;
    }

    async getProducts(categoryId: number): Promise<Product[]> {
        const { data } = await client.query({
            query: FETCH_PRODUCTS,
            variables: { categoryId },
        });
        return data.products;
    }

    async setParent(id: number, newParentId: number): Promise<Category> {
        const { data } = await client.mutate({
            mutation: SET_PARENT,
            variables: { id, newParentId },
        });
        return data.setParent;
    }

    async exists(name: string, shopId: number): Promise<boolean> {
        const { data } = await client.query({
            query: CHECK_CATEGORY_EXISTENCE,
            variables: { name, shopId },
        });
        return data.categoryExists;
    }

    async getTopLevelCategories(): Promise<Category[]> {
        const { data } = await client.query({
            query: FETCH_TOP_LEVEL_CATEGORIES,
        });
        return data.topLevelCategories;
    }

    async getCategoryHierarchy(categoryId: number): Promise<Category[]> {
        const { data } = await client.query({
            query: FETCH_CATEGORY_HIERARCHY,
            variables: { categoryId },
        });
        return data.categoryHierarchy;
    }
}
