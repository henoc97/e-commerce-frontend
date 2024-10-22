import { gql } from '@apollo/client';

// Mutation pour créer un article de commande
export const CREATE_ORDER_ITEM = gql`
  mutation CreateOrderItem($orderItemDTO: OrderItemDTO!) {
    createOrderItem(orderItemDTO: $orderItemDTO) {
      id
      orderId
      productId
      quantity
      price
    }
  }
`;

// Mutation pour supprimer un article de commande
export const DELETE_ORDER_ITEM = gql`
  mutation DeleteOrderItem($id: Int!) {
    deleteOrderItem(id: $id)
  }
`;

// Requête pour obtenir un article de commande par ID
export const FETCH_ORDER_ITEM_BY_ID = gql`
  query FetchOrderItemById($id: Int!) {
    fetchOrderItemById(id: $id) {
      id
      orderId
      productId
      quantity
      price
    }
  }
`;

// Requête pour obtenir les articles de commande par ID de commande
export const FETCH_ORDER_ITEMS_BY_ORDER_ID = gql`
  query FetchOrderItemsByOrderId($orderId: Int!) {
    fetchOrderItemsByOrderId(orderId: $orderId) {
      id
      orderId
      productId
      quantity
      price
    }
  }
`;

// Requête pour obtenir les articles de commande par ID de produit
export const FETCH_ORDER_ITEMS_BY_PRODUCT_ID = gql`
  query FetchOrderItemsByProductId($productId: Int!) {
    fetchOrderItemsByProductId(productId: $productId) {
      id
      orderId
      productId
      quantity
      price
    }
  }
`;

// Requête pour obtenir les articles de commande récents
export const FETCH_RECENT_ORDER_ITEMS = gql`
  query FetchRecentOrderItems($orderId: Int!) {
    fetchRecentOrderItems(orderId: $orderId) {
      id
      orderId
      productId
      quantity
      price
    }
  }
`;

// Requête pour obtenir les articles de commande à faible stock
export const FETCH_LOW_STOCK_ORDER_ITEMS = gql`
  query FetchLowStockOrderItems($threshold: Int!) {
    fetchLowStockOrderItems(threshold: $threshold) {
      id
      orderId
      productId
      quantity
      price
    }
  }
`;

// Mutation pour mettre à jour un article de commande
export const UPDATE_ORDER_ITEM = gql`
  mutation UpdateOrderItem($id: Int!, $updates: Partial<OrderItemDTO>!) {
    updateOrderItem(id: $id, updates: $updates) {
      id
      orderId
      productId
      quantity
      price
    }
  }
`;

// Requête pour calculer le prix total des articles de commande
export const CALCULATE_TOTAL_PRICE = gql`
  query CalculateTotalPrice($orderId: Int!) {
    calculateTotalPrice(orderId: $orderId)
  }
`;

