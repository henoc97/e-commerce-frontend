// src/config/graphql/queries/productVariant.queries.ts

import { gql } from '@apollo/client';

// Requête pour vérifier l'existence d'une variante de produit
export const CHECK_PRODUCT_VARIANT_EXISTENCE = gql`
  query CheckProductVariantExistence($productId: Int!, $name: String!, $value: String!) {
    checkProductVariantExistence(productId: $productId, name: $name, value: $value)
  }
`;

// Mutation pour créer une variante de produit
export const CREATE_PRODUCT_VARIANT = gql`
  mutation CreateProductVariant($variantDTO: ProductVariantDTO!) {
    createProductVariant(variantDTO: $variantDTO) {
      id
      productId
      name
      value
      price
    }
  }
`;

// Mutation pour supprimer une variante de produit
export const DELETE_PRODUCT_VARIANT = gql`
  mutation DeleteProductVariant($id: Int!) {
    deleteProductVariant(id: $id)
  }
`;

// Mutation pour supprimer les variantes d'un produit par ID de produit
export const DELETE_PRODUCT_VARIANTS_BY_PRODUCT_ID = gql`
  mutation DeleteProductVariantsByProductId($productId: Int!) {
    deleteProductVariantsByProductId(productId: $productId)
  }
`;

// Requête pour obtenir la variante de produit la plus populaire
export const FETCH_MOST_POPULAR_VARIANT = gql`
  query FetchMostPopularVariant($productId: Int!) {
    fetchMostPopularVariant(productId: $productId) {
      id
      name
      value
      popularity
    }
  }
`;

// Requête pour obtenir une variante de produit par ID
export const FETCH_PRODUCT_VARIANT_BY_ID = gql`
  query FetchProductVariantById($id: Int!) {
    fetchProductVariantById(id: $id) {
      id
      productId
      name
      value
      price
    }
  }
`;

// Requête pour obtenir les variantes de produit par nom
export const FETCH_PRODUCT_VARIANTS_BY_NAME = gql`
  query FetchProductVariantsByName($productId: Int!, $name: String!) {
    fetchProductVariantsByName(productId: $productId, name: $name) {
      id
      value
      price
    }
  }
`;

// Requête pour obtenir les variantes de produit par ID de produit
export const FETCH_PRODUCT_VARIANTS_BY_PRODUCT_ID = gql`
  query FetchProductVariantsByProductId($productId: Int!) {
    fetchProductVariantsByProductId(productId: $productId) {
      id
      name
      value
      price
    }
  }
`;

// Mutation pour mettre à jour les détails d'une variante de produit
export const UPDATE_PRODUCT_VARIANT_DETAILS = gql`
  mutation UpdateProductVariantDetails($id: Int!, $updateData: Partial<ProductVariantDTO>!) {
    updateProductVariantDetails(id: $id, updateData: $updateData) {
      id
      name
      value
      price
    }
  }
`;