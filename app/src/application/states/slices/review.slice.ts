import { createSlice } from '@reduxjs/toolkit';

import { Review } from '../../../domain/entities/review.entity';

import { createReviewExtraReducers } from '../extra-reducers/review.extra-reducers/create-review.extra-reducers';
import { flagReviewExtraReducers } from '../extra-reducers/review.extra-reducers/flag-review.extra-reducers';
import { getAverageRatingReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-average-rating-review.extra-reducers';
import { getByDateRangeReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-by-date-range-review.extra-reducers';
import { getByIdReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-by-id-review.extra-reducers';
import { getByProductReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-by-product-review.extra-reducers';
import { getByRatingReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-by-rating-review.extra-reducers';
import { getByUserReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-by-user-review.extra-reducers';
import { getFlaggedReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-flagged-review.extra-reducers';
import { getPopularReviewExtraReducers } from '../extra-reducers/review.extra-reducers/get-popular-review.extra-reducers';
import { modifyReviewExtraReducers } from '../extra-reducers/review.extra-reducers/modify-review.extra-reducers';
import { removeReviewExtraReducers } from '../extra-reducers/review.extra-reducers/remove-review.extra-reducers';
import { verifyReviewExtraReducers } from '../extra-reducers/review.extra-reducers/verify-review.extra-reducers';

interface ReviewState {
    reviews: Review[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ReviewState = {
    reviews: [],
    loading: false,
    success: false,
    error: null,
};

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        resetreviewState: (state) => {
            (state.reviews = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        createReviewExtraReducers(builder);
        flagReviewExtraReducers(builder);
        getAverageRatingReviewExtraReducers(builder);
        getByDateRangeReviewExtraReducers(builder);
        getByIdReviewExtraReducers(builder);
        getByProductReviewExtraReducers(builder);
        getByRatingReviewExtraReducers(builder);
        getByUserReviewExtraReducers(builder);
        getFlaggedReviewExtraReducers(builder);
        getPopularReviewExtraReducers(builder);
        modifyReviewExtraReducers(builder);
        removeReviewExtraReducers(builder);
        verifyReviewExtraReducers(builder);
    },
});

export const { resetreviewState } = reviewSlice.actions;

export default reviewSlice.reducer;
