// src/config/graphql/queries/user.queries.ts

import { gql } from '@apollo/client';

// Mutation pour ajouter une adresse à un utilisateur
export const ADD_ADDRESS_TO_USER = gql`
  mutation AddAddressToUser($userId: Int!, $address: AddressDTO!) {
    addAddressToUser(userId: $userId, address: $address) {
      id
      name
      addresses {
        id
        street
      }
    }
  }
`;

// Mutation pour ajouter une notification à un utilisateur
export const ADD_NOTIFICATION_TO_USER = gql`
  mutation AddNotificationToUser($userId: Int!, $notification: NotificationDTO!) {
    addNotificationToUser(userId: $userId, notification: $notification) {
      id
      name
      notifications {
        id
        message
      }
    }
  }
`;

// Mutation pour ajouter une commande à un utilisateur
export const ADD_ORDER_TO_USER = gql`
  mutation AddOrderToUser($userId: Int!, $order: OrderDTO!) {
    addOrderToUser(userId: $userId, order: $order) {
      id
      name
      orders {
        id
        total
      }
    }
  }
`;

// Mutation pour ajouter un sous-site à un utilisateur
export const ADD_SUBSITE_TO_USER = gql`
  mutation AddSubsiteToUser($userId: Int!, $subsite: SubsiteDTO!) {
    addSubsiteToUser(userId: $userId, subsite: $subsite) {
      id
      name
      subsites {
        id
        name
      }
    }
  }
`;

// Mutation pour créer un utilisateur
export const CREATE_USER = gql`
  mutation CreateUser($user: UserDTO!) {
    createUser(user: $user) {
      id
      name
      email
    }
  }
`;

// Mutation pour supprimer un utilisateur
export const DELETE_USER = gql`
  mutation DeleteUser($userId: Int!) {
    deleteUser(userId: $userId)
  }
`;

// Requête pour obtenir le nombre d'utilisateurs actifs
export const GET_ACTIVE_COUNT = gql`
  query GetActiveCount {
    getActiveCount
  }
`;

// Requête pour obtenir le nombre d'utilisateurs par rôle
export const GET_COUNT_BY_ROLE = gql`
  query GetCountByRole($role: UserRole!) {
    getCountByRole(role: $role)
  }
`;

// Requête pour obtenir les informations détaillées d'un utilisateur
export const GET_DETAILED_INFO = gql`
  query GetDetailedInfo($userId: Int!) {
    getDetailedInfo(userId: $userId) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir les utilisateurs inactifs
export const GET_INACTIVE_USERS = gql`
  query GetInactiveUsers($days: Int!) {
    getInactiveUsers(days: $days) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir un utilisateur par email
export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir un utilisateur par ID
export const GET_USER = gql`
  query GetUser($userId: Int!) {
    getUser(userId: $userId) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir les utilisateurs par rôle
export const GET_USERS_BY_ROLE = gql`
  query GetUsersByRole($role: UserRole!) {
    getUsersByRole(role: $role) {
      id
      name
      email
    }
  }
`;

// Mutation pour supprimer une adresse d'un utilisateur
export const REMOVE_ADDRESS_FROM_USER = gql`
  mutation RemoveAddressFromUser($userId: Int!, $addressId: Int!) {
    removeAddressFromUser(userId: $userId, addressId: $addressId) {
      id
      name
    }
  }
`;

// Mutation pour supprimer une notification d'un utilisateur
export const REMOVE_NOTIFICATION_FROM_USER = gql`
  mutation RemoveNotificationFromUser($userId: Int!, $notificationId: Int!) {
    removeNotificationFromUser(userId: $userId, notificationId: $notificationId) {
      id
      name
    }
  }
`;

// Mutation pour supprimer une commande d'un utilisateur
export const REMOVE_ORDER_FROM_USER = gql`
  mutation RemoveOrderFromUser($userId: Int!, $orderId: Int!) {
    removeOrderFromUser(userId: $userId, orderId: $orderId) {
      id
      name
    }
  }
`;

// Mutation pour supprimer un sous-site d'un utilisateur
export const REMOVE_SUBSITE_FROM_USER = gql`
  mutation RemoveSubsiteFromUser($userId: Int!, $subsiteId: Int!) {
    removeSubsiteFromUser(userId: $userId, subsiteId: $subsiteId) {
      id
      name
    }
  }
`;

// Mutation pour mettre à jour le mot de passe d'un utilisateur
export const UPDATE_USER_PASSWORD = gql`
  mutation UpdateUserPassword($userId: Int!, $newPassword: String!) {
    updateUserPassword(userId: $userId, newPassword: $newPassword) {
      id
      name
    }
  }
`;

// Mutation pour mettre à jour un utilisateur
export const UPDATE_USER = gql`
  mutation UpdateUser($userId: Int!, $user: Partial<UserDTO>!) {
    updateUser(userId: $userId, user: $user) {
      id
      name
      email
    }
  }
`;