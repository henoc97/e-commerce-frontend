// src/config/graphql/queries/subscription.queries.ts

import { gql } from '@apollo/client';

// Requête pour lister les abonnements actifs
export const LIST_ACTIVE_SUBSCRIPTIONS = gql`
  query ListActiveSubscriptions {
    listActiveSubscriptions {
      id
      name
      price
      status
    }
  }
`;

// Requête pour lister les abonnements expirés
export const LIST_EXPIRED_SUBSCRIPTIONS = gql`
  query ListExpiredSubscriptions {
    listExpiredSubscriptions {
      id
      name
      price
      status
    }
  }
`;

// Requête pour lister les abonnements expirant bientôt
export const LIST_EXPIRING_SUBSCRIPTIONS = gql`
  query ListExpiringSubscriptions($days: Int!) {
    listExpiringSubscriptions(days: $days) {
      id
      name
      price
      status
    }
  }
`;

// Requête pour lister les abonnements par gamme de prix
export const LIST_SUBSCRIPTIONS_BY_PRICE_RANGE = gql`
  query ListSubscriptionsByPriceRange($minPrice: Float!, $maxPrice: Float!) {
    listSubscriptionsByPriceRange(minPrice: $minPrice, maxPrice: $maxPrice) {
      id
      name
      price
      status
    }
  }
`;

// Requête pour lister les abonnements par vendeur
export const LIST_SUBSCRIPTIONS_BY_VENDOR = gql`
  query ListSubscriptionsByVendor($vendorId: Int!) {
    listSubscriptionsByVendor(vendorId: $vendorId) {
      id
      name
      price
      status
    }
  }
`;

// Requête pour obtenir un abonnement par ID
export const FETCH_SUBSCRIPTION_BY_ID = gql`
  query FetchSubscriptionById($id: Int!) {
    fetchSubscriptionById(id: $id) {
      id
      name
      price
      status
    }
  }
`;

// Requête pour obtenir le dernier abonnement
export const FETCH_LATEST_SUBSCRIPTION = gql`
  query FetchLatestSubscription {
    fetchLatestSubscription {
      id
      name
      price
      status
    }
  }
`;

// Mutation pour créer un abonnement
export const CREATE_SUBSCRIPTION = gql`
  mutation CreateSubscription($subscriptionDTO: SubscriptionDTO!) {
    createSubscription(subscriptionDTO: $subscriptionDTO) {
      id
      name
      price
      status
    }
  }
`;

// Mutation pour supprimer un abonnement
export const DELETE_SUBSCRIPTION = gql`
  mutation DeleteSubscription($id: Int!) {
    deleteSubscription(id: $id)
  }
`;

// Mutation pour mettre à jour un abonnement
export const UPDATE_SUBSCRIPTION = gql`
  mutation UpdateSubscription($id: Int!, $updates: Partial<SubscriptionDTO>!) {
    updateSubscription(id: $id, updates: $updates) {
      id
      name
      price
      status
    }
  }
`;

// Requête pour compter les abonnements par vendeur
export const COUNT_SUBSCRIPTIONS_BY_VENDOR = gql`
  query CountSubscriptionsByVendor($vendorId: Int!) {
    countSubscriptionsByVendor(vendorId: $vendorId)
  }
`;