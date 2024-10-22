import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_REVIEW,
    DELETE_REVIEW,
    FETCH_AVERAGE_RATING,
    FETCH_FLAGGED_REVIEWS,
    FETCH_POPULAR_REVIEWS,
    FETCH_REVIEW_BY_ID,
    FETCH_REVIEWS_BY_DATE_RANGE,
    FETCH_REVIEWS_BY_PRODUCT,
    FETCH_REVIEWS_BY_RATING,
    FETCH_REVIEWS_BY_USER,
    FLAG_REVIEW,
    UPDATE_REVIEW,
    VERIFY_REVIEW,
} from '../config/graphql/queries/review.queries';
import { Review } from '../../domain/entities/review.entity';
import { IReviewRepository } from '../../domain/repositories/review.repository';

@injectable()
export class ReviewRepositoryImpl implements IReviewRepository {
    async create(review: Review): Promise<Review> {
        const { data } = await client.mutate({
            mutation: CREATE_REVIEW,
            variables: { reviewDTO: review },
        });
        return data.createReview;
    }

    async getById(id: number): Promise<Review | null> {
        const { data } = await client.query({
            query: FETCH_REVIEW_BY_ID,
            variables: { id },
        });
        return data.fetchReviewById;
    }

    async modify(id: number, updates: Partial<Review>): Promise<Review> {
        const { data } = await client.mutate({
            mutation: UPDATE_REVIEW,
            variables: { id, reviewDTO: updates },
        });
        return data.updateReview;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_REVIEW,
            variables: { id },
        });
        return data.deleteReview;
    }

    async getByProduct(productId: number): Promise<Review[]> {
        const { data } = await client.query({
            query: FETCH_REVIEWS_BY_PRODUCT,
            variables: { productId },
        });
        return data.fetchReviewsByProduct;
    }

    async getByUser(userId: number): Promise<Review[]> {
        const { data } = await client.query({
            query: FETCH_REVIEWS_BY_USER,
            variables: { userId },
        });
        return data.fetchReviewsByUser;
    }

    async getByRating(rating: number): Promise<Review[]> {
        const { data } = await client.query({
            query: FETCH_REVIEWS_BY_RATING,
            variables: { rating },
        });
        return data.fetchReviewsByRating;
    }

    async getByDateRange(startDate: Date, endDate: Date): Promise<Review[]> {
        const { data } = await client.query({
            query: FETCH_REVIEWS_BY_DATE_RANGE,
            variables: { startDate, endDate },
        });
        return data.fetchReviewsByDateRange;
    }

    async verify(id: number): Promise<Review> {
        const { data } = await client.mutate({
            mutation: VERIFY_REVIEW,
            variables: { id },
        });
        return data.verifyReview;
    }

    async flag(id: number): Promise<Review> {
        const { data } = await client.mutate({
            mutation: FLAG_REVIEW,
            variables: { id },
        });
        return data.flagReview;
    }

    async getFlagged(): Promise<Review[]> {
        const { data } = await client.query({
            query: FETCH_FLAGGED_REVIEWS,
        });
        return data.fetchFlaggedReviews;
    }

    async getPopular(limit: number): Promise<Review[]> {
        const { data } = await client.query({
            query: FETCH_POPULAR_REVIEWS,
            variables: { limit },
        });
        return data.fetchPopularReviews;
    }

    async getAverageRating(productId: number): Promise<number> {
        const { data } = await client.query({
            query: FETCH_AVERAGE_RATING,
            variables: { productId },
        });
        return data.fetchAverageRating;
    }
}
