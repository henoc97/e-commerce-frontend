// src/config/graphql/queries/notification.queries.ts

import { gql } from '@apollo/client';

// Requête pour compter les notifications non lues
export const COUNT_UNREAD_NOTIFICATIONS = gql`
  query CountUnreadNotifications($userId: Int!) {
    countUnreadNotifications(userId: $userId)
  }
`;

// Mutation pour créer une notification
export const CREATE_NOTIFICATION = gql`
  mutation CreateNotification($notificationDTO: NotificationDTO!) {
    createNotification(notificationDTO: $notificationDTO) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;

// Mutation pour supprimer une notification
export const DELETE_NOTIFICATION = gql`
  mutation DeleteNotification($notificationId: Int!) {
    deleteNotification(notificationId: $notificationId)
  }
`;

// Requête pour obtenir une notification par ID
export const FETCH_NOTIFICATION_BY_ID = gql`
  query FetchNotificationById($notificationId: Int!) {
    fetchNotificationById(notificationId: $notificationId) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;

// Requête pour obtenir les notifications par plage de dates
export const FETCH_NOTIFICATIONS_BY_DATE_RANGE = gql`
  query FetchNotificationsByDateRange($startDate: Date!, $endDate: Date!) {
    fetchNotificationsByDateRange(startDate: $startDate, endDate: $endDate) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;

// Requête pour obtenir les notifications par type
export const FETCH_NOTIFICATIONS_BY_TYPE = gql`
  query FetchNotificationsByType($type: NotificationType!) {
    fetchNotificationsByType(type: $type) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;

// Requête pour obtenir les notifications par ID utilisateur
export const FETCH_NOTIFICATIONS_BY_USER_ID = gql`
  query FetchNotificationsByUserId($userId: Int!) {
    fetchNotificationsByUserId(userId: $userId) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;

// Requête pour obtenir les notifications récentes
export const FETCH_RECENT_NOTIFICATIONS = gql`
  query FetchRecentNotifications($userId: Int!) {
    fetchRecentNotifications(userId: $userId) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;

// Mutation pour marquer une notification comme lue
export const MARK_NOTIFICATION_AS_READ = gql`
  mutation MarkNotificationAsRead($notificationId: Int!) {
    markNotificationAsRead(notificationId: $notificationId) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;

// Mutation pour mettre à jour une notification
export const UPDATE_NOTIFICATION = gql`
  mutation UpdateNotification($notificationId: Int!, $updates: Partial<NotificationDTO>!) {
    updateNotification(notificationId: $notificationId, updates: $updates) {
      id
      userId
      type
      message
      read
      createdAt
    }
  }
`;