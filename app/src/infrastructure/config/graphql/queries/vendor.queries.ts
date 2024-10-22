// src/config/graphql/queries/vendor.queries.ts

import { gql } from '@apollo/client';

// Mutation pour ajouter un produit à un vendeur
export const ADD_PRODUCT_TO_VENDOR = gql`
  mutation AddProductToVendor($vendorId: Int!, $productDTO: ProductDTO!) {
    addProductToVendor(vendorId: $vendorId, productDTO: $productDTO) {
      id
      name
      products {
        id
        name
      }
    }
  }
`;

// Mutation pour créer un vendeur
export const CREATE_VENDOR = gql`
  mutation CreateVendor($vendorDTO: VendorDTO!) {
    createVendor(vendorDTO: $vendorDTO) {
      id
      name
    }
  }
`;

// Mutation pour supprimer un vendeur
export const DELETE_VENDOR = gql`
  mutation DeleteVendor($vendorId: Int!) {
    deleteVendor(vendorId: $vendorId)
  }
`;

// Requête pour trouver un vendeur par ID
export const FIND_VENDOR_BY_ID = gql`
  query FindVendorById($vendorId: Int!) {
    findVendorById(vendorId: $vendorId) {
      id
      name
    }
  }
`;

// Requête pour trouver des vendeurs par nom de magasin
export const FIND_VENDORS_BY_STORE_NAME = gql`
  query FindVendorsByStoreName($storeName: String!) {
    findVendorsByStoreName(storeName: $storeName) {
      id
      name
    }
  }
`;

// Requête pour trouver des vendeurs par abonnement
export const FIND_VENDORS_BY_SUBSCRIPTION = gql`
  query FindVendorsBySubscription($subscriptionId: Int!) {
    findVendorsBySubscription(subscriptionId: $subscriptionId) {
      id
      name
    }
  }
`;

// Requête pour trouver des vendeurs par utilisateur
export const FIND_VENDORS_BY_USER = gql`
  query FindVendorsByUser($userId: Int!) {
    findVendorsByUser(userId: $userId) {
      id
      name
    }
  }
`;

// Requête pour obtenir le dernier vendeur
export const GET_LATEST_VENDOR = gql`
  query GetLatestVendor {
    getLatestVendor {
      id
      name
    }
  }
`;

// Requête pour obtenir les produits d'un vendeur
export const GET_VENDOR_PRODUCTS = gql`
  query GetVendorProducts($vendorId: Int!) {
    getVendorProducts(vendorId: $vendorId) {
      id
      name
    }
  }
`;

// Requête pour obtenir le magasin d'un vendeur
export const GET_VENDOR_SHOP = gql`
  query GetVendorShop($vendorId: Int!) {
    getVendorShop(vendorId: $vendorId) {
      id
      name
    }
  }
`;

// Requête pour obtenir l'abonnement d'un vendeur
export const GET_VENDOR_SUBSCRIPTION = gql`
  query GetVendorSubscription($vendorId: Int!) {
    getVendorSubscription(vendorId: $vendorId) {
      id
      name
    }
  }
`;

// Mutation pour supprimer un produit d'un vendeur
export const REMOVE_PRODUCT_FROM_VENDOR = gql`
  mutation RemoveProductFromVendor($vendorId: Int!, $productId: Int!) {
    removeProductFromVendor(vendorId: $vendorId, productId: $productId) {
      id
      name
    }
  }
`;

// Mutation pour définir le magasin d'un vendeur
export const SET_VENDOR_SHOP = gql`
  mutation SetVendorShop($vendorId: Int!, $shopDTO: ShopDTO!) {
    setVendorShop(vendorId: $vendorId, shopDTO: $shopDTO) {
      id
      name
    }
  }
`;

// Mutation pour définir l'abonnement d'un vendeur
export const SET_VENDOR_SUBSCRIPTION = gql`
  mutation SetVendorSubscription($vendorId: Int!, $subscriptionDTO: SubscriptionDTO!) {
    setVendorSubscription(vendorId: $vendorId, subscriptionDTO: $subscriptionDTO) {
      id
      name
    }
  }
`;

// Mutation pour mettre à jour un vendeur
export const UPDATE_VENDOR = gql`
  mutation UpdateVendor($vendorId: Int!, $vendorDTO: Partial<VendorDTO>!) {
    updateVendor(vendorId: $vendorId, vendorDTO: $vendorDTO) {
      id
      name
    }
  }
`;

// Requête pour obtenir la liste des vendeurs
export const VENDOR_LIST = gql`
  query VendorList {
    vendorList {
      id
      name
    }
  }
`;