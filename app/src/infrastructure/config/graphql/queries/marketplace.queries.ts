// src/config/graphql/queries/marketplace.queries.ts

import { gql } from '@apollo/client';

// Requête pour lister tous les marketplaces
export const LIST_MARKETPLACES = gql`
  query ListMarketplaces {
    listMarketplaces {
      id
      name
      description
    }
  }
`;

// Requête pour obtenir un marketplace par ID
export const FETCH_MARKETPLACE_BY_ID = gql`
  query FetchMarketplaceById($id: Int!) {
    fetchMarketplaceById(id: $id) {
      id
      name
      description
    }
  }
`;

// Requête pour obtenir un marketplace par ID de shop
export const FETCH_MARKETPLACE_BY_SHOP_ID = gql`
  query FetchMarketplaceByShopId($shopId: Int!) {
    fetchMarketplaceByShopId(shopId: $shopId) {
      id
      name
      description
    }
  }
`;

// Requête pour obtenir les shops dans un marketplace
export const FETCH_SHOPS_IN_MARKETPLACE = gql`
  query FetchShopsInMarketplace($marketplaceId: Int!) {
    fetchShopsInMarketplace(marketplaceId: $marketplaceId) {
      id
      name
      owner
    }
  }
`;

// Mutation pour créer un marketplace
export const CREATE_MARKETPLACE = gql`
  mutation CreateMarketplace($dto: MarketplaceDTO!) {
    createMarketplace(dto: $dto) {
      id
      name
      description
    }
  }
`;

// Mutation pour supprimer un marketplace
export const DELETE_MARKETPLACE = gql`
  mutation DeleteMarketplace($id: Int!) {
    deleteMarketplace(id: $id)
  }
`;

// Mutation pour mettre à jour un marketplace
export const UPDATE_MARKETPLACE = gql`
  mutation UpdateMarketplace($id: Int!, $data: Partial<MarketplaceDTO>!) {
    updateMarketplace(id: $id, data: $data) {
      id
      name
      description
    }
  }
`;

// Mutation pour ajouter un shop à un marketplace
export const ADD_SHOP_TO_MARKETPLACE = gql`
  mutation AddShopToMarketplace($marketplaceId: Int!, $shopId: Int!) {
    addShopToMarketplace(marketplaceId: $marketplaceId, shopId: $shopId) {
      id
      name
      description
    }
  }
`;

// Mutation pour retirer un shop d'un marketplace
export const REMOVE_SHOP_FROM_MARKETPLACE = gql`
  mutation RemoveShopFromMarketplace($marketplaceId: Int!, $shopId: Int!) {
    removeShopFromMarketplace(marketplaceId: $marketplaceId, shopId: $shopId) {
      id
      name
      description
    }
  }
`;