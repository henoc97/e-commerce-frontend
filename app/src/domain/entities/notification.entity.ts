import { NotificationType } from '../enums/notification-type.enum';

/**
 * Represents a notification for a user.
 * Stores details about the notification type, content, and when it was sent.
 */
export interface Notification {
  /**
   * Unique identifier for the notification.
   */
  id: number;

  /**
   * Unique identifier for the user who will receive the notification.
   */
  userId: number;

  /**
   * The content of the notification.
   */
  content: string;

  /**
   * The date and time when the notification was sent.
   */
  sentAt: string;
}
