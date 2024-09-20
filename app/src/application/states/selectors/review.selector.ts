import { RootState } from '../store/store';

export const selectReviews = (state: RootState) => state.review.reviews;
export const selectReviewLoading = (state: RootState) => state.review.loading;
export const selectReviewSuccess = (state: RootState) => state.review.success;
export const selectReviewError = (state: RootState) => state.review.error;
