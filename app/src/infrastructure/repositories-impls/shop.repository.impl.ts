import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_SHOP,
    DELETE_SHOP,
    FETCH_SHOP_BY_ID,
    SEARCH_SHOPS_BY_NAME,
    ADD_PRODUCT_TO_SHOP,
    REMOVE_PRODUCT_FROM_SHOP,
    LIST_PRODUCTS_FOR_SHOP,
    ADD_ORDER_TO_SHOP,
    LIST_ORDERS_FOR_SHOP,
    ADD_CATEGORY_TO_SHOP,
    REMOVE_CATEGORY_FROM_SHOP,
    LIST_CATEGORIES_FOR_SHOP,
    ASSOCIATE_MARKETPLACE_WITH_SHOP,
    FETCH_MARKETPLACE_FOR_SHOP,
    LIST_SHOPS_BY_VENDOR,
    FETCH_MOST_RECENT_SHOP,
    FETCH_TOTAL_SALES_FOR_SHOP,
    FETCH_ORDER_REPORT_FOR_SHOP,
    FETCH_TOP_PRODUCT_FOR_SHOP,
    UPDATE_SHOP,
} from '../config/graphql/queries/shop.queries';
import { Shop } from '../../domain/entities/shop.entity';
import { Product } from '../../domain/entities/product.entity';
import { Order } from '../../domain/entities/order.entity';
import { Category } from '../../domain/entities/category.entity';
import { Marketplace } from '../../domain/entities/marketplace.entity';
import { IShopRepository } from '../../domain/repositories/shop.repository';

@injectable()
export class ShopRepositoryImpl implements IShopRepository {
    async create(shop: Shop): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: CREATE_SHOP,
            variables: { shop },
        });
        return data.createShop;
    }

    async getById(id: number): Promise<Shop | null> {
        const { data } = await client.query({
            query: FETCH_SHOP_BY_ID,
            variables: { id },
        });
        return data.fetchShopById;
    }

    async update(id: number, updates: Partial<Shop>): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: UPDATE_SHOP,
            variables: { id, updates },
        });
        return data.updateShop;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_SHOP,
            variables: { id },
        });
        return data.deleteShop;
    }

    async searchByName(name: string): Promise<Shop[]> {
        const { data } = await client.query({
            query: SEARCH_SHOPS_BY_NAME,
            variables: { name },
        });
        return data.searchShopsByName;
    }

    async addProduct(shopId: number, product: Product): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: ADD_PRODUCT_TO_SHOP,
            variables: { shopId, product },
        });
        return data.addProductToShop;
    }

    async removeProduct(shopId: number, productId: number): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: REMOVE_PRODUCT_FROM_SHOP,
            variables: { shopId, productId },
        });
        return data.removeProductFromShop;
    }

    async listProducts(shopId: number): Promise<Product[]> {
        const { data } = await client.query({
            query: LIST_PRODUCTS_FOR_SHOP,
            variables: { shopId },
        });
        return data.listProductsForShop;
    }

    async addOrder(shopId: number, order: Order): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: ADD_ORDER_TO_SHOP,
            variables: { shopId, order },
        });
        return data.addOrderToShop;
    }

    async listOrders(shopId: number): Promise<Order[]> {
        const { data } = await client.query({
            query: LIST_ORDERS_FOR_SHOP,
            variables: { shopId },
        });
        return data.listOrdersForShop;
    }

    async addCategory(shopId: number, category: Category): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: ADD_CATEGORY_TO_SHOP,
            variables: { shopId, category },
        });
        return data.addCategoryToShop;
    }

    async removeCategory(shopId: number, categoryId: number): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: REMOVE_CATEGORY_FROM_SHOP,
            variables: { shopId, categoryId },
        });
        return data.removeCategoryFromShop;
    }

    async listCategories(shopId: number): Promise<Category[]> {
        const { data } = await client.query({
            query: LIST_CATEGORIES_FOR_SHOP,
            variables: { shopId },
        });
        return data.listCategoriesForShop;
    }

    async associateMarketplace(shopId: number, marketplace: Marketplace): Promise<Shop> {
        const { data } = await client.mutate({
            mutation: ASSOCIATE_MARKETPLACE_WITH_SHOP,
            variables: { shopId, marketplace },
        });
        return data.associateMarketplaceWithShop;
    }

    async getMarketplace(shopId: number): Promise<Marketplace | null> {
        const { data } = await client.query({
            query: FETCH_MARKETPLACE_FOR_SHOP,
            variables: { shopId },
        });
        return data.fetchMarketplaceForShop;
    }

    async listByVendor(vendorId: number): Promise<Shop[]> {
        const { data } = await client.query({
            query: LIST_SHOPS_BY_VENDOR,
            variables: { vendorId },
        });
        return data.listShopsByVendor;
    }

    async getMostRecent(): Promise<Shop | null> {
        const { data } = await client.query({
            query: FETCH_MOST_RECENT_SHOP,
        });
        return data.fetchMostRecentShop;
    }

    async getTotalSales(shopId: number): Promise<number> {
        const { data } = await client.query({
            query: FETCH_TOTAL_SALES_FOR_SHOP,
            variables: { shopId },
        });
        return data.fetchTotalSalesForShop;
    }

    async getOrderReport(shopId: number, startDate: Date, endDate: Date): Promise<any> {
        const { data } = await client.query({
            query: FETCH_ORDER_REPORT_FOR_SHOP,
            variables: { shopId, startDate, endDate },
        });
        return data.fetchOrderReportForShop;
    }

    async getTopProduct(shopId: number): Promise<Product> {
        const { data } = await client.query({
            query: FETCH_TOP_PRODUCT_FOR_SHOP,
            variables: { shopId },
        });
        return data.fetchTopProductForShop;
    }
}
