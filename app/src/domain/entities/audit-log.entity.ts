import { AuditLogAction } from '../enums/audit-log-action.enum';

/**
 * Represents an audit log entry in the system.
 * Captures details about changes made by users, including the action type, entity affected, and the specific changes.
 */
export interface AuditLog {
  /**
   * Unique identifier for the audit log entry.
   * This ID is used to uniquely identify each log entry in the system.
   */
  id: number;

  /**
   * Unique identifier for the user who performed the action.
   * This ID references the `User` entity associated with the log entry.
   */
  userId: number;

  /**
   * Type of action performed by the user.
   * This could represent various actions such as create, update, delete, etc.
   */
  action: AuditLogAction;

  /**
   * The entity affected by the action.
   * This represents the type of entity (e.g., 'User', 'Order') that was changed.
   */
  entity: string;

  /**
   * Unique identifier of the entity affected by the action.
   * This ID corresponds to the specific instance of the entity that was changed.
   */
  entityId: number;

  /**
   * Details of the changes made.
   * This can include before-and-after values or other relevant change information.
   */
  changes: any;

  /**
   * The date and time when the action was performed.
   */
  createdAt: string;
}
