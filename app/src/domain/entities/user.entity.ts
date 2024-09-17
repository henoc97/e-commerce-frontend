import { UserProfile } from './user-profile.entity';
import { Address } from './address.entity';
import { UserRole } from '../enums/user-role.enum';
import { Order } from './order.entity';
import { Vendor } from './vendor.entity';
import { Review } from './review.entity';
import { Cart } from './cart.entity';
import { Ticket } from './ticket.entity';
import { UserActivity } from './user-activity.entity';
import { AuditLog } from './audit-log.entity';
import { Notification } from './notification.entity';

/**
 * Represents a user in the system.
 * The User entity contains personal and related information about a user, including their profile, addresses, orders, and more.
 */
export interface User {
  /** Unique identifier for the user */
  id: number;

  /** Email address of the user */
  email: string;

  /** Password for the user account */
  password: string;

  /** Optional name of the user */
  name?: string;

  /** Role of the user (e.g., CLIENT, ADMIN) */
  role: UserRole;

  /** Date when the user was created */
  createdAt: string;

  /** Date when the user was last updated */
  updatedAt: string;
}
