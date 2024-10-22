// src/config/graphql/queries/userProfile.queries.ts

import { gql } from '@apollo/client';

// Mutation pour créer un profil utilisateur
export const CREATE_USER_PROFILE = gql`
  mutation CreateUserProfile($profileDTO: UserProfileDTO!) {
    createUserProfile(profileDTO: $profileDTO) {
      id
      name
      email
    }
  }
`;

// Mutation pour supprimer un profil utilisateur
export const DELETE_USER_PROFILE = gql`
  mutation DeleteUserProfile($id: Int!) {
    deleteUserProfile(id: $id)
  }
`;

// Requête pour obtenir les profils récemment mis à jour
export const FETCH_RECENTLY_UPDATED_PROFILES = gql`
  query FetchRecentlyUpdatedProfiles($limit: Int!) {
    fetchRecentlyUpdatedProfiles(limit: $limit) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir un profil utilisateur par ID
export const FETCH_USER_PROFILE_BY_ID = gql`
  query FetchUserProfileById($id: Int!) {
    fetchUserProfileById(id: $id) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir un profil utilisateur par ID utilisateur
export const FETCH_USER_PROFILE_BY_USER_ID = gql`
  query FetchUserProfileByUserId($userId: Int!) {
    fetchUserProfileByUserId(userId: $userId) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir les profils par plage d'anniversaire
export const FETCH_USER_PROFILES_BY_BIRTHDAY_RANGE = gql`
  query FetchUserProfilesByBirthdayRange($startDate: Date!, $endDate: Date!) {
    fetchUserProfilesByBirthdayRange(startDate: $startDate, endDate: $endDate) {
      id
      name
      email
    }
  }
`;

// Requête pour obtenir les profils par genre
export const FETCH_USER_PROFILES_BY_GENDER = gql`
  query FetchUserProfilesByGender($gender: String!) {
    fetchUserProfilesByGender(gender: $gender) {
      id
      name
      email
    }
  }
`;

// Requête pour trouver des profils correspondants
export const FIND_MATCHING_PROFILES = gql`
  query FindMatchingProfiles($criteria: Partial<UserProfileDTO>!) {
    findMatchingProfiles(criteria: $criteria) {
      id
      name
      email
    }
  }
`;

// Requête pour vérifier si un téléphone est utilisé
export const IS_PHONE_IN_USE = gql`
  query IsPhoneInUse($phone: String!) {
    isPhoneInUse(phone: $phone)
  }
`;

// Mutation pour mettre à jour un profil utilisateur
export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($id: Int!, $profileDTO: Partial<UserProfileDTO>!) {
    updateUserProfile(id: $id, profileDTO: $profileDTO) {
      id
      name
      email
    }
  }
`;