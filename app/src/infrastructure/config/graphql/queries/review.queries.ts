// src/config/graphql/queries/review.queries.ts

import { gql } from '@apollo/client';

// Mutation pour créer un avis
export const CREATE_REVIEW = gql`
    mutation CreateReview($reviewDTO: ReviewDTO!) {
        createReview(reviewDTO: $reviewDTO) {
            id
            content
            rating
            productId
        }
    }
`;

// Mutation pour supprimer un avis
export const DELETE_REVIEW = gql`
    mutation DeleteReview($id: Int!) {
        deleteReview(id: $id)
    }
`;

// Requête pour obtenir la note moyenne d'un produit
export const FETCH_AVERAGE_RATING = gql`
    query FetchAverageRating($productId: Int!) {
        fetchAverageRating(productId: $productId)
    }
`;

// Requête pour obtenir les avis signalés
export const FETCH_FLAGGED_REVIEWS = gql`
    query FetchFlaggedReviews {
        fetchFlaggedReviews {
            id
            content
            flagged
        }
    }
`;

// Requête pour obtenir les avis populaires
export const FETCH_POPULAR_REVIEWS = gql`
    query FetchPopularReviews($limit: Int!) {
        fetchPopularReviews(limit: $limit) {
            id
            content
            rating
        }
    }
`;

// Requête pour obtenir un avis par ID
export const FETCH_REVIEW_BY_ID = gql`
    query FetchReviewById($id: Int!) {
        fetchReviewById(id: $id) {
            id
            content
            rating
        }
    }
`;

// Requête pour obtenir les avis par plage de dates
export const FETCH_REVIEWS_BY_DATE_RANGE = gql`
    query FetchReviewsByDateRange($startDate: Date!, $endDate: Date!) {
        fetchReviewsByDateRange(startDate: $startDate, endDate: $endDate) {
            id
            content
            rating
        }
    }
`;

// Requête pour obtenir les avis par produit
export const FETCH_REVIEWS_BY_PRODUCT = gql`
    query FetchReviewsByProduct($productId: Int!) {
        fetchReviewsByProduct(productId: $productId) {
            id
            content
            rating
        }
    }
`;

// Requête pour obtenir les avis par note
export const FETCH_REVIEWS_BY_RATING = gql`
    query FetchReviewsByRating($rating: Int!) {
        fetchReviewsByRating(rating: $rating) {
            id
            content
            rating
        }
    }
`;

// Requête pour obtenir les avis par utilisateur
export const FETCH_REVIEWS_BY_USER = gql`
    query FetchReviewsByUser($userId: Int!) {
        fetchReviewsByUser(userId: $userId) {
            id
            content
            rating
        }
    }
`;

// Mutation pour signaler un avis
export const FLAG_REVIEW = gql`
    mutation FlagReview($id: Int!) {
        flagReview(id: $id) {
            id
            content
            flagged
        }
    }
`;

// Mutation pour mettre à jour un avis
export const UPDATE_REVIEW = gql`
    mutation UpdateReview($id: Int!, $reviewDTO: ReviewDTO!) {
        updateReview(id: $id, reviewDTO: $reviewDTO) {
            id
            content
            rating
        }
    }
`;

// Mutation pour vérifier un avis
export const VERIFY_REVIEW = gql`
    mutation VerifyReview($id: Int!) {
        verifyReview(id: $id) {
            id
            content
            verified
        }
    }
`;
