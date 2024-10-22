// src/config/graphql/queries/category.queries.ts

import { gql } from '@apollo/client';

// Requête pour vérifier l'existence d'une catégorie
export const CHECK_CATEGORY_EXISTENCE = gql`
  query CheckCategoryExistence($name: String!, $shopId: Int!) {
    categoryExists(name: $name, shopId: $shopId)
  }
`;

// Mutation pour créer une catégorie
export const CREATE_CATEGORY = gql`
  mutation CreateCategory($categoryDTO: CategoryDTO!) {
    createCategory(categoryDTO: $categoryDTO) {
      id
      name
      parentId
      shopId
    }
  }
`;

// Mutation pour supprimer une catégorie
export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: Int!) {
    deleteCategory(id: $id)
  }
`;

// Requête pour obtenir une catégorie par ID
export const FETCH_CATEGORY_BY_ID = gql`
  query FetchCategoryById($id: Int!) {
    categoryById(id: $id) {
      id
      name
      parentId
      shopId
    }
  }
`;

// Requête pour obtenir la hiérarchie d'une catégorie
export const FETCH_CATEGORY_HIERARCHY = gql`
  query FetchCategoryHierarchy($categoryId: Int!) {
    categoryHierarchy(categoryId: $categoryId) {
      id
      name
      parentId
      shopId
    }
  }
`;

// Requête pour obtenir les enfants d'une catégorie
export const FETCH_CHILDREN = gql`
  query FetchChildren($parentId: Int!) {
    children(parentId: $parentId) {
      id
      name
      parentId
      shopId
    }
  }
`;

// Requête pour obtenir les produits d'une catégorie
export const FETCH_PRODUCTS = gql`
  query FetchProducts($categoryId: Int!) {
    products(categoryId: $categoryId) {
      id
      name
      price
      categoryId
    }
  }
`;

// Requête pour obtenir les catégories de premier niveau
export const FETCH_TOP_LEVEL_CATEGORIES = gql`
  query FetchTopLevelCategories {
    topLevelCategories {
      id
      name
      parentId
      shopId
    }
  }
`;

// Mutation pour définir le parent d'une catégorie
export const SET_PARENT = gql`
  mutation SetParent($id: Int!, $newParentId: Int!) {
    setParent(id: $id, newParentId: $newParentId) {
      id
      name
      parentId
      shopId
    }
  }
`;

// Mutation pour mettre à jour une catégorie
export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: Int!, $categoryDTO: Partial<CategoryDTO>!) {
    updateCategory(id: $id, categoryDTO: $categoryDTO) {
      id
      name
      parentId
      shopId
    }
  }
`;