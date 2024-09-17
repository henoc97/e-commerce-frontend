import { TicketStatus } from "../enums/ticket-status.enum";


/**
 * Represents a support ticket created by a user.
 * Stores details about the ticket such as subject, description, status, and timestamps.
 */
export interface Ticket {
  /**
   * Unique identifier for the ticket.
   */
  id: number;

  /**
   * Unique identifier for the user who created the ticket.
   */
  userId: number;

  /**
   * The subject of the ticket.
   */
  subject: string;

  /**
   * Detailed description of the issue or request.
   */
  description: string;

  /**
   * The current status of the ticket (e.g., OPEN, IN_PROGRESS, CLOSED).
   */
  status: TicketStatus;

  /**
   * The date and time when the ticket was created.
   * Automatically set to the current date and time when the ticket is created.
   */
  createdAt: string;

  /**
   * The date and time when the ticket was last updated.
   * Automatically set to the current date and time when the ticket is created.
   */
  updatedAt: string;
}
