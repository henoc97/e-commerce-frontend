// src/config/graphql/queries/subsite.queries.ts

import { gql } from '@apollo/client';

// Requête pour compter les sous-sites par utilisateur
export const COUNT_SUBSITES_BY_USER = gql`
  query CountSubsitesByUser($userId: Int!) {
    countSubsitesByUser(userId: $userId)
  }
`;

// Mutation pour créer un sous-site
export const CREATE_SUBSITE = gql`
  mutation CreateSubsite($subsiteDTO: SubsiteDTO!) {
    createSubsite(subsiteDTO: $subsiteDTO) {
      id
      name
      status
    }
  }
`;

// Requête pour obtenir le dernier sous-site
export const FETCH_LATEST_SUBSITE = gql`
  query FetchLatestSubsite {
    fetchLatestSubsite {
      id
      name
      status
    }
  }
`;

// Requête pour obtenir un sous-site par ID
export const FETCH_SUBSITE_BY_ID = gql`
  query FetchSubsiteById($id: Int!) {
    fetchSubsiteById(id: $id) {
      id
      name
      status
    }
  }
`;

// Requête pour lister les sous-sites actifs
export const LIST_ACTIVE_SUBSITES = gql`
  query ListActiveSubsites {
    listActiveSubsites {
      id
      name
      status
    }
  }
`;

// Mutation pour supprimer un sous-site
export const REMOVE_SUBSITE = gql`
  mutation RemoveSubsite($id: Int!) {
    removeSubsite(id: $id)
  }
`;

// Mutation pour mettre à jour un sous-site
export const UPDATE_SUBSITE = gql`
  mutation UpdateSubsite($id: Int!, $updates: Partial<SubsiteDTO>!) {
    updateSubsite(id: $id, updates: $updates) {
      id
      name
      status
    }
  }
`;

// Mutation pour valider un sous-site
export const VALIDATE_SUBSITE = gql`
  mutation ValidateSubsite($subsiteDTO: SubsiteDTO!) {
    validateSubsite(subsiteDTO: $subsiteDTO)
  }
`;

// Requête pour obtenir la configuration d'un sous-site
export const FETCH_SUBSITE_CONFIG = gql`
  query FetchSubsiteConfig($id: Int!) {
    fetchSubsiteConfig(id: $id)
  }
`;

// Requête pour lister les sous-sites par utilisateur
export const LIST_SUBSITES_BY_USER = gql`
  query ListSubsitesByUser($userId: Int!) {
    listSubsitesByUser(userId: $userId) {
      id
      name
      status
    }
  }
`;

// Mutation pour mettre à jour la configuration d'un sous-site
export const UPDATE_SUBSITE_CONFIG = gql`
  mutation UpdateSubsiteConfig($id: Int!, $config: JSON!) {
    updateSubsiteConfig(id: $id, config: $config)
  }
`;