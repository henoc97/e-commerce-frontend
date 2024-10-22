// src/config/graphql/queries/refund.queries.ts

import { gql } from '@apollo/client';

// Mutation pour approuver un remboursement
export const APPROVE_REFUND = gql`
  mutation ApproveRefund($id: Int!) {
    approveRefund(id: $id) {
      id
      amount
      status
    }
  }
`;

// Mutation pour annuler un remboursement
export const CANCEL_REFUND = gql`
  mutation CancelRefund($id: Int!) {
    cancelRefund(id: $id) {
      id
      amount
      status
    }
  }
`;

// Requête pour vérifier l'éligibilité d'un remboursement
export const CHECK_REFUND_ELIGIBILITY = gql`
  query CheckRefundEligibility($refund: RefundDTO!) {
    checkRefundEligibility(refund: $refund)
  }
`;

// Mutation pour créer un remboursement
export const CREATE_REFUND = gql`
  mutation CreateRefund($refundDTO: RefundDTO!) {
    createRefund(refundDTO: $refundDTO) {
      id
      amount
      status
    }
  }
`;

// Mutation pour supprimer un remboursement
export const DELETE_REFUND = gql`
  mutation DeleteRefund($id: Int!) {
    deleteRefund(id: $id)
  }
`;

// Requête pour obtenir un remboursement par ID
export const FETCH_REFUND_BY_ID = gql`
  query FetchRefundById($id: Int!) {
    fetchRefundById(id: $id) {
      id
      amount
      status
    }
  }
`;

// Requête pour obtenir les remboursements par commande
export const FETCH_REFUNDS_BY_ORDER = gql`
  query FetchRefundsByOrder($orderId: Int!) {
    fetchRefundsByOrder(orderId: $orderId) {
      id
      amount
      status
    }
  }
`;

// Requête pour obtenir les remboursements par statut
export const FETCH_REFUNDS_BY_STATUS = gql`
  query FetchRefundsByStatus($status: RefundStatus!) {
    fetchRefundsByStatus(status: $status) {
      id
      amount
      status
    }
  }
`;

// Requête pour obtenir le montant total remboursé
export const FETCH_TOTAL_REFUNDED_AMOUNT = gql`
  query FetchTotalRefundedAmount($orderId: Int!) {
    fetchTotalRefundedAmount(orderId: $orderId)
  }
`;

// Mutation pour émettre un remboursement partiel
export const ISSUE_PARTIAL_REFUND = gql`
  mutation IssuePartialRefund($id: Int!, $amount: Float!) {
    issuePartialRefund(id: $id, amount: $amount) {
      id
      amount
      status
    }
  }
`;

// Mutation pour traiter un remboursement
export const PROCESS_REFUND = gql`
  mutation ProcessRefund($id: Int!, $status: RefundStatus!) {
    processRefund(id: $id, status: $status) {
      id
      amount
      status
    }
  }
`;

// Mutation pour mettre à jour un remboursement
export const UPDATE_REFUND = gql`
  mutation UpdateRefund($id: Int!, $updates: Partial<RefundDTO>!) {
    updateRefund(id: $id, updates: $updates) {
      id
      amount
      status
    }
  }
`;