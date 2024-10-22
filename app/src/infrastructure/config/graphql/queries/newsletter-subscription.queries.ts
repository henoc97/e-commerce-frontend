// src/config/graphql/queries/newsletterSubscription.queries.ts

import { gql } from '@apollo/client';

// Requête pour vérifier si un email est abonné
export const CHECK_EMAIL_SUBSCRIBED = gql`
  query CheckEmailSubscribed($email: String!, $shopId: Int!) {
    checkEmailSubscribed(email: $email, shopId: $shopId)
  }
`;

// Requête pour compter le nombre total d'abonnements à la newsletter
export const COUNT_TOTAL_NEWSLETTER_SUBSCRIPTIONS = gql`
  query CountTotalNewsletterSubscriptions($shopId: Int!) {
    countTotalNewsletterSubscriptions(shopId: $shopId)
  }
`;

// Requête pour obtenir un abonnement à la newsletter par email
export const FETCH_NEWSLETTER_SUBSCRIPTION_BY_EMAIL = gql`
  query FetchNewsletterSubscriptionByEmail($email: String!, $shopId: Int!) {
    fetchNewsletterSubscriptionByEmail(email: $email, shopId: $shopId) {
      id
      email
      shopId
      subscribedAt
    }
  }
`;

// Requête pour obtenir un abonnement à la newsletter par ID
export const FETCH_NEWSLETTER_SUBSCRIPTION_BY_ID = gql`
  query FetchNewsletterSubscriptionById($id: Int!) {
    fetchNewsletterSubscriptionById(id: $id) {
      id
      email
      shopId
      subscribedAt
    }
  }
`;

// Requête pour obtenir les abonnements à la newsletter par plage de dates
export const FETCH_NEWSLETTER_SUBSCRIPTIONS_BY_DATE_RANGE = gql`
  query FetchNewsletterSubscriptionsByDateRange($startDate: Date!, $endDate: Date!, $shopId: Int!) {
    fetchNewsletterSubscriptionsByDateRange(startDate: $startDate, endDate: $endDate, shopId: $shopId) {
      id
      email
      shopId
      subscribedAt
    }
  }
`;

// Requête pour lister tous les abonnements à la newsletter
export const LIST_NEWSLETTER_SUBSCRIPTIONS = gql`
  query ListNewsletterSubscriptions($shopId: Int!) {
    listNewsletterSubscriptions(shopId: $shopId) {
      id
      email
      shopId
      subscribedAt
    }
  }
`;

// Mutation pour créer un abonnement à la newsletter
export const CREATE_NEWSLETTER_SUBSCRIPTION = gql`
  mutation CreateNewsletterSubscription($dto: NewsletterSubscriptionDTO!) {
    createNewsletterSubscription(dto: $dto) {
      id
      email
      shopId
      subscribedAt
    }
  }
`;

// Mutation pour supprimer un abonnement à la newsletter
export const DELETE_NEWSLETTER_SUBSCRIPTION = gql`
  mutation DeleteNewsletterSubscription($id: Int!) {
    deleteNewsletterSubscription(id: $id)
  }
`;

// Mutation pour mettre à jour un abonnement à la newsletter
export const UPDATE_NEWSLETTER_SUBSCRIPTION = gql`
  mutation UpdateNewsletterSubscription($id: Int!, $dto: Partial<NewsletterSubscriptionDTO>!) {
    updateNewsletterSubscription(id: $id, dto: $dto) {
      id
      email
      shopId
      subscribedAt
    }
  }
`;