// src/config/graphql/queries/productImage.queries.ts

import { gql } from '@apollo/client';

// Requête pour vérifier l'existence d'une image de produit
export const DOES_PRODUCT_IMAGE_EXIST = gql`
  query DoesProductImageExist($productId: Int!, $url: String!) {
    doesProductImageExist(productId: $productId, url: $url)
  }
`;

// Requête pour compter les images d'un produit
export const COUNT_PRODUCT_IMAGES = gql`
  query CountProductImages($productId: Int!) {
    countProductImages(productId: $productId)
  }
`;

// Mutation pour créer une image de produit
export const CREATE_PRODUCT_IMAGE = gql`
  mutation CreateProductImage($imageDTO: ProductImageDTO!) {
    createProductImage(imageDTO: $imageDTO) {
      id
      productId
      url
      isPrimary
    }
  }
`;

// Mutation pour supprimer une image de produit
export const DELETE_PRODUCT_IMAGE = gql`
  mutation DeleteProductImage($id: Int!) {
    deleteProductImage(id: $id)
  }
`;

// Mutation pour supprimer les images d'un produit par ID de produit
export const DELETE_PRODUCT_IMAGES_BY_PRODUCT_ID = gql`
  mutation DeleteProductImagesByProductId($productId: Int!) {
    deleteProductImagesByProductId(productId: $productId)
  }
`;

// Requête pour obtenir l'image principale d'un produit
export const FETCH_PRIMARY_PRODUCT_IMAGE = gql`
  query FetchPrimaryProductImage($productId: Int!) {
    fetchPrimaryProductImage(productId: $productId) {
      id
      url
      isPrimary
    }
  }
`;

// Requête pour obtenir une image de produit par ID
export const FETCH_PRODUCT_IMAGE_BY_ID = gql`
  query FetchProductImageById($id: Int!) {
    fetchProductImageById(id: $id) {
      id
      productId
      url
      isPrimary
    }
  }
`;

// Requête pour obtenir les images d'un produit par ID de produit
export const FETCH_PRODUCT_IMAGES_BY_PRODUCT_ID = gql`
  query FetchProductImagesByProductId($productId: Int!) {
    fetchProductImagesByProductId(productId: $productId) {
      id
      url
      isPrimary
    }
  }
`;

// Mutation pour mettre à jour l'URL d'une image de produit
export const UPDATE_PRODUCT_IMAGE_URL = gql`
  mutation UpdateProductImageUrl($id: Int!, $url: String!) {
    updateProductImageUrl(id: $id, url: $url) {
      id
      url
    }
  }
`;

// Mutation pour mettre à jour une image de produit
export const UPDATE_PRODUCT_IMAGE = gql`
  mutation UpdateProductImage($id: Int!, $updates: Partial<ProductImageDTO>!) {
    updateProductImage(id: $id, updates: $updates) {
      id
      productId
      url
      isPrimary
    }
  }
`;