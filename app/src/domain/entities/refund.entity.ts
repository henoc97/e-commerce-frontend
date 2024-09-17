import { RefundStatus } from '../enums/refund-status.enum';

/**
 * Represents a refund associated with an order.
 * Stores details about the refund, including the reason, amount, and status.
 */
export interface Refund {
  /**
   * Unique identifier for the refund.
   */
  id: number;

  /**
   * Unique identifier for the associated order.
   */
  orderId: number;

  /**
   * Reason for the refund.
   * Provides the justification or cause for the refund request.
   */
  reason: string;

  /**
   * Amount of money to be refunded.
   * Represents the total amount to be returned to the customer.
   */
  amount: number;

  /**
   * Current status of the refund.
   * Indicates whether the refund is pending, completed, or rejected.
   */
  status: RefundStatus;

  /**
   * The date and time when the refund was created.
   */
  createdAt: string;
}
