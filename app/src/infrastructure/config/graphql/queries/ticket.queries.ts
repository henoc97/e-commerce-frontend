// src/config/graphql/queries/ticket.queries.ts

import { gql } from '@apollo/client';

// Mutation pour créer un ticket
export const CREATE_TICKET = gql`
  mutation CreateTicket($ticketDTO: TicketDTO!) {
    createTicket(ticketDTO: $ticketDTO) {
      id
      title
      status
    }
  }
`;

// Mutation pour fermer un ticket
export const CLOSE_TICKET = gql`
  mutation CloseTicket($id: Int!) {
    closeTicket(id: $id) {
      id
      title
      status
    }
  }
`;

// Requête pour obtenir un ticket par ID
export const FETCH_TICKET_BY_ID = gql`
  query FetchTicketById($id: Int!) {
    fetchTicketById(id: $id) {
      id
      title
      status
    }
  }
`;

// Requête pour lister les tickets par utilisateur
export const LIST_TICKETS_BY_USER = gql`
  query ListTicketsByUser($userId: Int!) {
    listTicketsByUser(userId: $userId) {
      id
      title
      status
    }
  }
`;

// Mutation pour supprimer un ticket
export const DELETE_TICKET = gql`
  mutation DeleteTicket($id: Int!) {
    deleteTicket(id: $id)
  }
`;

// Requête pour obtenir le dernier ticket
export const FETCH_LATEST_TICKET = gql`
  query FetchLatestTicket {
    fetchLatestTicket {
      id
      title
      status
    }
  }
`;

// Requête pour lister les tickets à haute priorité
export const LIST_HIGH_PRIORITY_TICKETS = gql`
  query ListHighPriorityTickets {
    listHighPriorityTickets {
      id
      title
      status
    }
  }
`;

// Requête pour lister les tickets par plage de dates
export const LIST_TICKETS_BY_DATE_RANGE = gql`
  query ListTicketsByDateRange($startDate: Date!, $endDate: Date!) {
    listTicketsByDateRange(startDate: $startDate, endDate: $endDate) {
      id
      title
      status
    }
  }
`;

// Requête pour lister les tickets par statut
export const LIST_TICKETS_BY_STATUS = gql`
  query ListTicketsByStatus($status: TicketStatus!) {
    listTicketsByStatus(status: $status) {
      id
      title
      status
    }
  }
`;

// Mutation pour mettre à jour un ticket
export const UPDATE_TICKET = gql`
  mutation UpdateTicket($id: Int!, $updates: Partial<TicketDTO>!) {
    updateTicket(id: $id, updates: $updates) {
      id
      title
      status
    }
  }
`;

// Requête pour compter les tickets ouverts par utilisateur
export const COUNT_OPEN_TICKETS_BY_USER = gql`
  query CountOpenTicketsByUser($userId: Int!) {
    countOpenTicketsByUser(userId: $userId)
  }
`;
