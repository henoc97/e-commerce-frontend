import { gql } from '@apollo/client';

// Mutation pour créer un log d'audit
export const CREATE_AUDIT_LOG = gql`
  mutation CreateAuditLog($dto: AuditLogDTO!) {
    createAuditLog(dto: $dto) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;

// Mutation pour supprimer un log d'audit
export const DELETE_AUDIT_LOG = gql`
  mutation DeleteAuditLog($id: Int!) {
    deleteAuditLog(id: $id)
  }
`;

// Requête pour obtenir un log d'audit par ID
export const GET_AUDIT_LOG_BY_ID = gql`
  query GetAuditLogById($id: Int!) {
    auditLogById(id: $id) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;

// Requête pour obtenir des logs d'audit par action
export const GET_AUDIT_LOGS_BY_ACTION = gql`
  query GetAuditLogsByAction($action: AuditLogAction!) {
    auditLogsByAction(action: $action) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;

// Requête pour obtenir des logs d'audit par plage de dates
export const GET_AUDIT_LOGS_BY_DATE_RANGE = gql`
  query GetAuditLogsByDateRange($startDate: Date!, $endDate: Date!) {
    auditLogsByDateRange(startDate: $startDate, endDate: $endDate) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;

// Requête pour obtenir des logs d'audit par entité
export const GET_AUDIT_LOGS_BY_ENTITY = gql`
  query GetAuditLogsByEntity($entity: String!, $entityId: Int!) {
    auditLogsByEntity(entity: $entity, entityId: $entityId) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;

// Requête pour obtenir des logs d'audit par utilisateur
export const GET_AUDIT_LOGS_BY_USER = gql`
  query GetAuditLogsByUser($userId: Int!) {
    auditLogsByUser(userId: $userId) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;

// Requête pour obtenir les logs d'audit récents
export const GET_RECENT_AUDIT_LOGS = gql`
  query GetRecentAuditLogs($limit: Int!) {
    recentAuditLogs(limit: $limit) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;

// Mutation pour mettre à jour un log d'audit
export const UPDATE_AUDIT_LOG = gql`
  mutation UpdateAuditLog($id: Int!, $dto: AuditLogDTO!) {
    updateAuditLog(id: $id, dto: $dto) {
      id
      action
      entity
      entityId
      userId
      timestamp
    }
  }
`;
