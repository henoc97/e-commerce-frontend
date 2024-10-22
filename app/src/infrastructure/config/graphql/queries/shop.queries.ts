// src/config/graphql/queries/shop.queries.ts

import { gql } from '@apollo/client';

// Mutation pour créer une boutique
export const CREATE_SHOP = gql`
  mutation CreateShop($shop: ShopDTO!) {
    createShop(shop: $shop) {
      id
      name
      location
    }
  }
`;

// Mutation pour ajouter une catégorie à une boutique
export const ADD_CATEGORY_TO_SHOP = gql`
  mutation AddCategoryToShop($shopId: Int!, $category: CategoryDTO!) {
    addCategoryToShop(shopId: $shopId, category: $category) {
      id
      name
      categories {
        id
        name
      }
    }
  }
`;

// Mutation pour ajouter une commande à une boutique
export const ADD_ORDER_TO_SHOP = gql`
  mutation AddOrderToShop($shopId: Int!, $order: OrderDTO!) {
    addOrderToShop(shopId: $shopId, order: $order) {
      id
      name
      orders {
        id
        total
      }
    }
  }
`;

// Mutation pour ajouter un produit à une boutique
export const ADD_PRODUCT_TO_SHOP = gql`
  mutation AddProductToShop($shopId: Int!, $product: ProductDTO!) {
    addProductToShop(shopId: $shopId, product: $product) {
      id
      name
      products {
        id
        name
      }
    }
  }
`;

// Mutation pour associer un marché à une boutique
export const ASSOCIATE_MARKETPLACE_WITH_SHOP = gql`
  mutation AssociateMarketplaceWithShop($shopId: Int!, $marketplaceId: Int!) {
    associateMarketplaceWithShop(shopId: $shopId, marketplaceId: $marketplaceId) {
      id
      name
    }
  }
`;

// Mutation pour supprimer une boutique
export const DELETE_SHOP = gql`
  mutation DeleteShop($id: Int!) {
    deleteShop(id: $id)
  }
`;

// Requête pour obtenir la boutique la plus récente
export const FETCH_MOST_RECENT_SHOP = gql`
  query FetchMostRecentShop {
    fetchMostRecentShop {
      id
      name
    }
  }
`;

// Requête pour obtenir une boutique par ID
export const FETCH_SHOP_BY_ID = gql`
  query FetchShopById($id: Int!) {
    fetchShopById(id: $id) {
      id
      name
      location
    }
  }
`;

// Requête pour obtenir la liste des boutiques
export const FETCH_SHOP_LIST = gql`
  query FetchShopList {
    fetchShopList {
      id
      name
    }
  }
`;

// Requête pour lister les boutiques par vendeur
export const LIST_SHOPS_BY_VENDOR = gql`
  query ListShopsByVendor($vendorId: Int!) {
    listShopsByVendor(vendorId: $vendorId) {
      id
      name
    }
  }
`;

// Requête pour rechercher des boutiques par nom
export const SEARCH_SHOPS_BY_NAME = gql`
  query SearchShopsByName($name: String!) {
    searchShopsByName(name: $name) {
      id
      name
    }
  }
`;

// Mutation pour mettre à jour une boutique
export const UPDATE_SHOP = gql`
  mutation UpdateShop($shopId: Int!, $updates: Partial<ShopDTO>!) {
    updateShop(shopId: $shopId, updates: $updates) {
      id
      name
      location
    }
  }
`;

// Requête pour obtenir le rapport de commande pour une boutique
export const FETCH_ORDER_REPORT_FOR_SHOP = gql`
  query FetchOrderReportForShop($shopId: Int!, $startDate: Date!, $endDate: Date!) {
    fetchOrderReportForShop(shopId: $shopId, startDate: $startDate, endDate: $endDate) {
      id
      total
    }
  }
`;

// Requête pour obtenir le rapport de revenus pour une boutique
export const FETCH_SHOP_REVENUE_REPORT = gql`
  query FetchShopRevenueReport($shopId: Int!, $startDate: Date!, $endDate: Date!) {
    fetchShopRevenueReport(shopId: $shopId, startDate: $startDate, endDate: $endDate) {
      id
      revenue
    }
  }
`;

// Requête pour obtenir le rapport de ventes pour une boutique
export const FETCH_SHOP_SALES_REPORT = gql`
  query FetchShopSalesReport($shopId: Int!, $startDate: Date!, $endDate: Date!) {
    fetchShopSalesReport(shopId: $shopId, startDate: $startDate, endDate: $endDate) {
      id
      sales
    }
  }
`;

// Requête pour obtenir le produit le plus vendu pour une boutique
export const FETCH_TOP_PRODUCT_FOR_SHOP = gql`
  query FetchTopProductForShop($shopId: Int!) {
    fetchTopProductForShop(shopId: $shopId) {
      id
      name
    }
  }
`;

// Requête pour obtenir les ventes totales pour une boutique
export const FETCH_TOTAL_SALES_FOR_SHOP = gql`
  query FetchTotalSalesForShop($shopId: Int!) {
    fetchTotalSalesForShop(shopId: $shopId)
  }
`;

// Mutation pour supprimer une catégorie d'une boutique
export const REMOVE_CATEGORY_FROM_SHOP = gql`
  mutation RemoveCategoryFromShop($shopId: Int!, $categoryId: Int!) {
    removeCategoryFromShop(shopId: $shopId, categoryId: $categoryId)
  }
`;

// Mutation pour supprimer un produit d'une boutique
export const REMOVE_PRODUCT_FROM_SHOP = gql`
  mutation RemoveProductFromShop($shopId: Int!, $productId: Int!) {
    removeProductFromShop(shopId: $shopId, productId: $productId)
  }
`;