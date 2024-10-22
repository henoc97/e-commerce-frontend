// src/config/graphql/queries/order.queries.ts

import { gql } from '@apollo/client';

// Requête pour obtenir une commande par ID
export const GET_ORDER_BY_ID = gql`
  query GetOrderById($id: Int!) {
    getOrderById(id: $id) {
      id
      userId
      status
      totalAmount
      createdAt
    }
  }
`;

// Requête pour obtenir toutes les commandes
export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      id
      userId
      status
      totalAmount
      createdAt
    }
  }
`;

// Mutation pour créer une commande
export const CREATE_ORDER = gql`
  mutation CreateOrder($orderDTO: OrderDTO!) {
    createOrder(orderDTO: $orderDTO) {
      id
      userId
      status
      totalAmount
      createdAt
    }
  }
`;

// Mutation pour supprimer une commande
export const DELETE_ORDER = gql`
  mutation DeleteOrder($id: Int!) {
    deleteOrder(id: $id)
  }
`;

// Mutation pour mettre à jour le statut d'une commande
export const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($orderId: Int!, $status: OrderStatus!) {
    updateOrderStatus(orderId: $orderId, status: $status) {
      id
      status
    }
  }
`;

// Mutation pour ajouter un paiement à une commande
export const ADD_PAYMENT_TO_ORDER = gql`
  mutation AddPaymentToOrder($orderId: Int!, $paymentId: String!) {
    addPaymentToOrder(orderId: $orderId, paymentId: $paymentId) {
      id
      payments
    }
  }
`;

// Mutation pour ajouter un remboursement à une commande
export const ADD_REFUND_TO_ORDER = gql`
  mutation AddRefundToOrder($orderId: Int!, $refundId: String!) {
    addRefundToOrder(orderId: $orderId, refundId: $refundId) {
      id
      refunds
    }
  }
`;

// Requête pour obtenir une commande par numéro de suivi
export const GET_ORDER_BY_TRACKING_NUMBER = gql`
  query GetOrderByTrackingNumber($trackingNumber: String!) {
    getOrderByTrackingNumber(trackingNumber: $trackingNumber) {
      id
      trackingNumber
      status
    }
  }
`;

// Requête pour obtenir les commandes par plage de dates
export const GET_ORDERS_BY_DATE_RANGE = gql`
  query GetOrdersByDateRange($startDate: Date!, $endDate: Date!) {
    getOrdersByDateRange(startDate: $startDate, endDate: $endDate) {
      id
      createdAt
      totalAmount
    }
  }
`;

// Requête pour obtenir les commandes par ID de boutique
export const GET_ORDERS_BY_SHOP_ID = gql`
  query GetOrdersByShopId($shopId: Int!) {
    getOrdersByShopId(shopId: $shopId) {
      id
      shopId
      totalAmount
    }
  }
`;

// Requête pour obtenir les commandes par statut
export const GET_ORDERS_BY_STATUS = gql`
  query GetOrdersByStatus($status: OrderStatus!) {
    getOrdersByStatus(status: $status) {
      id
      status
      totalAmount
    }
  }
`;

// Requête pour obtenir les commandes par ID utilisateur
export const GET_ORDERS_BY_USER_ID = gql`
  query GetOrdersByUserId($userId: Int!) {
    getOrdersByUserId(userId: $userId) {
      id
      userId
      totalAmount
    }
  }
`;

// Requête pour obtenir les commandes récentes par boutique
export const GET_RECENT_ORDERS_BY_SHOP = gql`
  query GetRecentOrdersByShop($shopId: Int!, $limit: Int!) {
    getRecentOrdersByShop(shopId: $shopId, limit: $limit) {
      id
      shopId
      totalAmount
    }
  }
`;

// Requête pour obtenir les commandes les plus importantes par montant
export const GET_TOP_ORDERS_BY_AMOUNT = gql`
  query GetTopOrdersByAmount($topN: Int!) {
    getTopOrdersByAmount(topN: $topN) {
      id
      totalAmount
    }
  }
`;

// Mutation pour mettre à jour une commande
export const UPDATE_ORDER = gql`
  mutation UpdateOrder($orderId: Int!, $updates: Partial<OrderDTO>!) {
    updateOrder(orderId: $orderId, updates: $updates) {
      id
      status
      totalAmount
    }
  }
`;