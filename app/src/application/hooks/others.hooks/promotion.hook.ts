import { useAppDispatch, useAppSelector } from '../index.hook';

import { Promotion } from '../../../domain/entities/promotion.entity';

import { applyToProductPromotion } from '../../states/thunks/promotion.thunks/apply-to-product-promotion.thunk';
import { combinePromotion } from '../../states/thunks/promotion.thunks/combine-promotion.thunk';
import { createPromotion } from '../../states/thunks/promotion.thunks/create-promotion.thunk';
import { getActiveBetweenPromotion } from '../../states/thunks/promotion.thunks/get-active-between-promotion.thunk';
import { getActivePromotion } from '../../states/thunks/promotion.thunks/get-active-promotion.thunk';
import { getBestForProductPromotion } from '../../states/thunks/promotion.thunks/get-best-for-product-promotion.thunk';
import { getByIdPromotion } from '../../states/thunks/promotion.thunks/get-by-id-promotion.thunk';
import { getByProductPromotion } from '../../states/thunks/promotion.thunks/get-by-product-promotion.thunk';
import { modifyPromotion } from '../../states/thunks/promotion.thunks/modify-promotion.thunk';
import { removePromotion } from '../../states/thunks/promotion.thunks/remove-promotion.thunk';

export const usePromotion: any = () => {
    const dispatch = useAppDispatch();
    const promotions = useAppSelector((state: any) => state.promotions);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleApplyToProductPromotion = (
        productId: number,
        promotionId: number
    ) => {
        dispatch(applyToProductPromotion({ productId, promotionId }));
    };

    const handleCombinePromotion = (promotions: Promotion[]) => {
        dispatch(combinePromotion({ promotions }));
    };

    const handleCreatePromotion = (promotion: Promotion) => {
        dispatch(createPromotion({ promotion }));
    };

    const handleGetActiveBetweenPromotion = (start: Date, end: Date) => {
        dispatch(getActiveBetweenPromotion({ start, end }));
    };

    const handleGetActivePromotion = () => {
        dispatch(getActivePromotion({}));
    };

    const handleGetBestForProductPromotion = (productId: number) => {
        dispatch(getBestForProductPromotion({ productId }));
    };

    const handleGetByIdPromotion = (id: number) => {
        dispatch(getByIdPromotion({ id }));
    };

    const handleGetByProductPromotion = (productId: number) => {
        dispatch(getByProductPromotion({ productId }));
    };

    const handleModifyPromotion = (id: number, updates: Partial<Promotion>) => {
        dispatch(modifyPromotion({ id, updates }));
    };

    const handleRemovePromotion = (id: number) => {
        dispatch(removePromotion({ id }));
    };

    return {
        ...promotions,
        loading,
        success,
        error,
        handleApplyToProductPromotion,
        handleCombinePromotion,
        handleCreatePromotion,
        handleGetActiveBetweenPromotion,
        handleGetActivePromotion,
        handleGetBestForProductPromotion,
        handleGetByIdPromotion,
        handleGetByProductPromotion,
        handleModifyPromotion,
        handleRemovePromotion,
    };
};
