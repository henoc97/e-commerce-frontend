import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    LIST_MARKETPLACES,
    FETCH_MARKETPLACE_BY_ID,
    FETCH_MARKETPLACE_BY_SHOP_ID,
    FETCH_SHOPS_IN_MARKETPLACE,
    CREATE_MARKETPLACE,
    DELETE_MARKETPLACE,
    UPDATE_MARKETPLACE,
    ADD_SHOP_TO_MARKETPLACE,
    REMOVE_SHOP_FROM_MARKETPLACE,
} from '../config/graphql/queries/marketplace.queries';
import { Marketplace } from '../../domain/entities/marketplace.entity';
import { Shop } from '../../domain/entities/shop.entity';
import { IMarketplaceRepository } from '../../domain/repositories/marketplace.repository';

@injectable()
export class MarketplaceRepositoryImpl implements IMarketplaceRepository {
    async create(marketplace: Marketplace): Promise<Marketplace> {
        const { data } = await client.mutate({
            mutation: CREATE_MARKETPLACE,
            variables: { dto: marketplace },
        });
        return data.createMarketplace;
    }

    async getById(id: number): Promise<Marketplace | null> {
        const { data } = await client.query({
            query: FETCH_MARKETPLACE_BY_ID,
            variables: { id },
        });
        return data.fetchMarketplaceById;
    }

    async list(): Promise<Marketplace[]> {
        const { data } = await client.query({
            query: LIST_MARKETPLACES,
        });
        return data.listMarketplaces;
    }

    async update(id: number, data: Partial<Marketplace>): Promise<Marketplace> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_MARKETPLACE,
            variables: { id, data },
        });
        return updatedData.updateMarketplace;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_MARKETPLACE,
            variables: { id },
        });
        return data.deleteMarketplace;
    }

    async addShop(marketplaceId: number, shop: Shop): Promise<Marketplace> {
        const { data } = await client.mutate({
            mutation: ADD_SHOP_TO_MARKETPLACE,
            variables: { marketplaceId, shopId: shop.id },
        });
        return data.addShopToMarketplace;
    }

    async removeShop(marketplaceId: number, shopId: number): Promise<Marketplace> {
        const { data } = await client.mutate({
            mutation: REMOVE_SHOP_FROM_MARKETPLACE,
            variables: { marketplaceId, shopId },
        });
        return data.removeShopFromMarketplace;
    }

    async getShops(marketplaceId: number): Promise<Shop[]> {
        const { data } = await client.query({
            query: FETCH_SHOPS_IN_MARKETPLACE,
            variables: { marketplaceId },
        });
        return data.fetchShopsInMarketplace;
    }

    async getMarketplaceByShopId(shopId: number): Promise<Marketplace | null> {
        const { data } = await client.query({
            query: FETCH_MARKETPLACE_BY_SHOP_ID,
            variables: { shopId },
        });
        return data.fetchMarketplaceByShopId;
    }
}
