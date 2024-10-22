// src/config/graphql/queries/payment.queries.ts

import { gql } from '@apollo/client';

// Mutation pour créer un paiement
export const CREATE_PAYMENT = gql`
  mutation CreatePayment($paymentDTO: PaymentDTO!) {
    createPayment(paymentDTO: $paymentDTO) {
      id
      orderId
      amount
      method
      status
      createdAt
    }
  }
`;

// Mutation pour supprimer un paiement
export const DELETE_PAYMENT = gql`
  mutation DeletePayment($id: Int!) {
    deletePayment(id: $id)
  }
`;

// Requête pour obtenir le paiement le plus récent par ID de commande
export const FETCH_MOST_RECENT_PAYMENT_BY_ORDER_ID = gql`
  query FetchMostRecentPaymentByOrderId($orderId: Int!) {
    fetchMostRecentPaymentByOrderId(orderId: $orderId) {
      id
      amount
      method
      status
      createdAt
    }
  }
`;

// Requête pour obtenir un paiement par ID
export const FETCH_PAYMENT_BY_ID = gql`
  query FetchPaymentById($id: Int!) {
    fetchPaymentById(id: $id) {
      id
      orderId
      amount
      method
      status
      createdAt
    }
  }
`;

// Requête pour obtenir les paiements par plage de dates
export const FETCH_PAYMENTS_BY_DATE_RANGE = gql`
  query FetchPaymentsByDateRange($startDate: Date!, $endDate: Date!) {
    fetchPaymentsByDateRange(startDate: $startDate, endDate: $endDate) {
      id
      orderId
      amount
      method
      status
      createdAt
    }
  }
`;

// Requête pour obtenir les paiements par méthode
export const FETCH_PAYMENTS_BY_METHOD = gql`
  query FetchPaymentsByMethod($method: String!) {
    fetchPaymentsByMethod(method: $method) {
      id
      orderId
      amount
      status
      createdAt
    }
  }
`;

// Requête pour obtenir les paiements par ID de commande
export const FETCH_PAYMENTS_BY_ORDER_ID = gql`
  query FetchPaymentsByOrderId($orderId: Int!) {
    fetchPaymentsByOrderId(orderId: $orderId) {
      id
      amount
      method
      status
      createdAt
    }
  }
`;

// Requête pour obtenir les paiements par statut
export const FETCH_PAYMENTS_BY_STATUS = gql`
  query FetchPaymentsByStatus($status: PaymentStatus!) {
    fetchPaymentsByStatus(status: $status) {
      id
      orderId
      amount
      method
      createdAt
    }
  }
`;

// Requête pour obtenir les paiements groupés par méthode
export const FETCH_PAYMENTS_GROUPED_BY_METHOD = gql`
  query FetchPaymentsGroupedByMethod {
    fetchPaymentsGroupedByMethod {
      method
      payments {
        id
        orderId
        amount
        status
        createdAt
      }
    }
  }
`;

// Requête pour obtenir le montant total par plage de dates
export const FETCH_TOTAL_AMOUNT_BY_DATE_RANGE = gql`
  query FetchTotalAmountByDateRange($startDate: Date!, $endDate: Date!) {
    fetchTotalAmountByDateRange(startDate: $startDate, endDate: $endDate)
  }
`;

// Mutation pour mettre à jour un paiement
export const UPDATE_PAYMENT = gql`
  mutation UpdatePayment($id: Int!, $updates: Partial<PaymentDTO>!) {
    updatePayment(id: $id, updates: $updates) {
      id
      orderId
      amount
      method
      status
      createdAt
    }
  }
`;