import { useAppDispatch, useAppSelector } from '../index.hook';

import { Review } from '../../../domain/entities/review.entity';

import { createReview } from '../../states/thunks/review.thunks/create-review.thunk';
import { flagReview } from '../../states/thunks/review.thunks/flag-review.thunk';
import { getAverageRatingReview } from '../../states/thunks/review.thunks/get-average-rating-review.thunk';
import { getByDateRangeReview } from '../../states/thunks/review.thunks/get-by-date-range-review.thunk';
import { getByIdReview } from '../../states/thunks/review.thunks/get-by-id-review.thunk';
import { getByProductReview } from '../../states/thunks/review.thunks/get-by-product-review.thunk';
import { getByRatingReview } from '../../states/thunks/review.thunks/get-by-rating-review.thunk';
import { getByUserReview } from '../../states/thunks/review.thunks/get-by-user-review.thunk';
import { getFlaggedReview } from '../../states/thunks/review.thunks/get-flagged-review.thunk';
import { getPopularReview } from '../../states/thunks/review.thunks/get-popular-review.thunk';
import { modifyReview } from '../../states/thunks/review.thunks/modify-review.thunk';
import { removeReview } from '../../states/thunks/review.thunks/remove-review.thunk';
import { verifyReview } from '../../states/thunks/review.thunks/verify-review.thunk';

export const useReview: any = () => {
    const dispatch = useAppDispatch();
    const reviews = useAppSelector((state: any) => state.reviews);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCreateReview = (review: Review) => {
        dispatch(createReview({ review }));
    };

    const handleFlagReview = (id: number) => {
        dispatch(flagReview({ id }));
    };

    const handleGetAverageRatingReview = (productId: number) => {
        dispatch(getAverageRatingReview({ productId }));
    };

    const handleGetByDateRangeReview = (startDate: Date, endDate: Date) => {
        dispatch(getByDateRangeReview({ startDate, endDate }));
    };

    const handleGetByIdReview = (id: number) => {
        dispatch(getByIdReview({ id }));
    };

    const handleGetByProductReview = (productId: number) => {
        dispatch(getByProductReview({ productId }));
    };

    const handleGetByRatingReview = (rating: number) => {
        dispatch(getByRatingReview({ rating }));
    };

    const handleGetByUserReview = (userId: number) => {
        dispatch(getByUserReview({ userId }));
    };

    const handleGetFlaggedReview = () => {
        dispatch(getFlaggedReview({}));
    };

    const handleGetPopularReview = (limit: number) => {
        dispatch(getPopularReview({ limit }));
    };

    const handleModifyReview = (id: number, updates: Partial<Review>) => {
        dispatch(modifyReview({ id, updates }));
    };

    const handleRemoveReview = (id: number) => {
        dispatch(removeReview({ id }));
    };

    const handleVerifyReview = (id: number) => {
        dispatch(verifyReview({ id }));
    };

    return {
        ...reviews,
        loading,
        success,
        error,
        handleCreateReview,
        handleFlagReview,
        handleGetAverageRatingReview,
        handleGetByDateRangeReview,
        handleGetByIdReview,
        handleGetByProductReview,
        handleGetByRatingReview,
        handleGetByUserReview,
        handleGetFlaggedReview,
        handleGetPopularReview,
        handleModifyReview,
        handleRemoveReview,
        handleVerifyReview,
    };
};
