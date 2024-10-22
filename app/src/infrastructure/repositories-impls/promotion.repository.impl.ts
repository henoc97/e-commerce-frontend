import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    APPLY_PROMOTION_TO_PRODUCT,
    COMBINE_PROMOTIONS,
    CREATE_PROMOTION,
    DELETE_PROMOTION,
    FETCH_ACTIVE_PROMOTIONS_BETWEEN,
    FETCH_ACTIVE_PROMOTIONS,
    FETCH_BEST_PROMOTION_FOR_PRODUCT,
    FETCH_PROMOTION_BY_ID,
    FETCH_PROMOTIONS_BY_PRODUCT,
    UPDATE_PROMOTION,
} from '../config/graphql/queries/promotion.queries';
import { Promotion } from '../../domain/entities/promotion.entity';
import { IPromotionRepository } from '../../domain/repositories/promotion.repository';

@injectable()
export class PromotionRepositoryImpl implements IPromotionRepository {
    async create(promotion: Promotion): Promise<Promotion> {
        const { data } = await client.mutate({
            mutation: CREATE_PROMOTION,
            variables: { promotionDTO: promotion },
        });
        return data.createPromotion;
    }

    async getById(id: number): Promise<Promotion | null> {
        const { data } = await client.query({
            query: FETCH_PROMOTION_BY_ID,
            variables: { id },
        });
        return data.fetchPromotionById;
    }

    async modify(id: number, updates: Partial<Promotion>): Promise<Promotion> {
        const { data } = await client.mutate({
            mutation: UPDATE_PROMOTION,
            variables: { promotionId: id, promotionDTO: updates },
        });
        return data.updatePromotion;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_PROMOTION,
            variables: { promotionId: id },
        });
        return data.deletePromotion;
    }

    async getByProduct(productId: number): Promise<Promotion[]> {
        const { data } = await client.query({
            query: FETCH_PROMOTIONS_BY_PRODUCT,
            variables: { productId },
        });
        return data.fetchPromotionsByProduct;
    }

    async getActiveBetween(start: Date, end: Date): Promise<Promotion[]> {
        const { data } = await client.query({
            query: FETCH_ACTIVE_PROMOTIONS_BETWEEN,
            variables: { start, end },
        });
        return data.fetchActivePromotionsBetween;
    }

    async getActive(): Promise<Promotion[]> {
        const { data } = await client.query({
            query: FETCH_ACTIVE_PROMOTIONS,
        });
        return data.fetchActivePromotions;
    }

    async getBestForProduct(productId: number): Promise<Promotion | null> {
        const { data } = await client.query({
            query: FETCH_BEST_PROMOTION_FOR_PRODUCT,
            variables: { productId },
        });
        return data.fetchBestPromotionForProduct;
    }

    async combine(promotions: Promotion[]): Promise<Promotion | null> {
        const { data } = await client.mutate({
            mutation: COMBINE_PROMOTIONS,
            variables: { promotions },
        });
        return data.combinePromotions;
    }

    async applyToProduct(productId: number, promotionId: number): Promise<Promotion> {
        const { data } = await client.mutate({
            mutation: APPLY_PROMOTION_TO_PRODUCT,
            variables: { productId, promotionId },
        });
        return data.applyPromotionToProduct;
    }
}
