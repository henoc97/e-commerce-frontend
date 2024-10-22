// src/config/graphql/queries/userActivity.queries.ts

import { gql } from '@apollo/client';

// Requête pour compter les activités par utilisateur
export const COUNT_ACTIVITIES = gql`
    query CountActivities($userId: Int!) {
        countActivities(userId: $userId)
    }
`;

// Mutation pour supprimer une activité
export const DELETE_ACTIVITY = gql`
    mutation DeleteActivity($id: Int!) {
        deleteActivity(id: $id)
    }
`;

// Requête pour obtenir une activité par ID
export const FETCH_ACTIVITY = gql`
    query FetchActivity($id: Int!) {
        fetchActivity(id: $id) {
            id
            type
            timestamp
        }
    }
`;

// Requête pour obtenir les activités récentes par utilisateur
export const GET_RECENT_ACTIVITIES = gql`
    query GetRecentActivities($userId: Int!, $limit: Int!) {
        getRecentActivities(userId: $userId, limit: $limit) {
            id
            type
            timestamp
        }
    }
`;

// Requête pour lister les activités par plage de dates
export const LIST_ACTIVITIES_BY_DATE_RANGE = gql`
    query ListActivitiesByDateRange($start: Date!, $end: Date!) {
        listActivitiesByDateRange(start: $start, end: $end) {
            id
            type
            timestamp
        }
    }
`;

// Requête pour lister les activités par produit
export const LIST_ACTIVITIES_BY_PRODUCT = gql`
    query ListActivitiesByProduct($productId: Int!) {
        listActivitiesByProduct(productId: $productId) {
            id
            type
            timestamp
        }
    }
`;

// Requête pour lister les activités par utilisateur
export const LIST_ACTIVITIES_BY_USER = gql`
    query ListActivitiesByUser($userId: Int!) {
        listActivitiesByUser(userId: $userId) {
            id
            type
            timestamp
        }
    }
`;

// Mutation pour enregistrer une activité
export const RECORD_ACTIVITY = gql`
    mutation RecordActivity($activityDTO: UserActivityDTO!) {
        recordActivity(activityDTO: $activityDTO) {
            id
            type
            timestamp
        }
    }
`;

// Mutation pour mettre à jour une activité
export const UPDATE_ACTIVITY = gql`
  mutation UpdateActivity($id: Int!, $updates: Partial<UserActivityDTO>!) {
    updateActivity(id: $id, updates: $updates) {
      id
      type
      timestamp
    }
  }
`;

// Requête pour valider une activité
export const VALIDATE_ACTIVITY = gql`
    query ValidateActivity($activityDTO: UserActivityDTO!) {
        validateActivity(activityDTO: $activityDTO)
    }
`;
