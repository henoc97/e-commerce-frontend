// src/config/graphql/queries/promotion.queries.ts

import { gql } from '@apollo/client';

// Mutation pour appliquer une promotion à un produit
export const APPLY_PROMOTION_TO_PRODUCT = gql`
  mutation ApplyPromotionToProduct($productId: Int!, $promotionId: Int!) {
    applyPromotionToProduct(productId: $productId, promotionId: $promotionId) {
      id
      discount
      startDate
      endDate
    }
  }
`;

// Mutation pour combiner des promotions
export const COMBINE_PROMOTIONS = gql`
  mutation CombinePromotions($promotions: [PromotionDTO!]!) {
    combinePromotions(promotions: $promotions) {
      id
      discount
    }
  }
`;

// Mutation pour créer une promotion
export const CREATE_PROMOTION = gql`
  mutation CreatePromotion($promotionDTO: PromotionDTO!) {
    createPromotion(promotionDTO: $promotionDTO) {
      id
      discount
      startDate
      endDate
    }
  }
`;

// Mutation pour supprimer une promotion
export const DELETE_PROMOTION = gql`
  mutation DeletePromotion($promotionId: Int!) {
    deletePromotion(promotionId: $promotionId)
  }
`;

// Requête pour obtenir les promotions actives entre deux dates
export const FETCH_ACTIVE_PROMOTIONS_BETWEEN = gql`
  query FetchActivePromotionsBetween($start: Date!, $end: Date!) {
    fetchActivePromotionsBetween(start: $start, end: $end) {
      id
      discount
      startDate
      endDate
    }
  }
`;

// Requête pour obtenir les promotions actives
export const FETCH_ACTIVE_PROMOTIONS = gql`
  query FetchActivePromotions {
    fetchActivePromotions {
      id
      discount
      startDate
      endDate
    }
  }
`;

// Requête pour obtenir la meilleure promotion pour un produit
export const FETCH_BEST_PROMOTION_FOR_PRODUCT = gql`
  query FetchBestPromotionForProduct($productId: Int!) {
    fetchBestPromotionForProduct(productId: $productId) {
      id
      discount
    }
  }
`;

// Requête pour obtenir une promotion par ID
export const FETCH_PROMOTION_BY_ID = gql`
  query FetchPromotionById($id: Int!) {
    fetchPromotionById(id: $id) {
      id
      discount
      startDate
      endDate
    }
  }
`;

// Requête pour obtenir les promotions par produit
export const FETCH_PROMOTIONS_BY_PRODUCT = gql`
  query FetchPromotionsByProduct($productId: Int!) {
    fetchPromotionsByProduct(productId: $productId) {
      id
      discount
      startDate
      endDate
    }
  }
`;

// Mutation pour mettre à jour une promotion
export const UPDATE_PROMOTION = gql`
  mutation UpdatePromotion($promotionId: Int!, $promotionDTO: PromotionDTO!) {
    updatePromotion(promotionId: $promotionId, promotionDTO: $promotionDTO) {
      id
      discount
      startDate
      endDate
    }
  }
`;