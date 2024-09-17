import { Product } from './product.entity';
import { Shop } from './shop.entity';
import { Subscription } from './subscription.entity';
import { User } from './user.entity';

/**
 * Represents a vendor entity in the system.
 */
export interface Vendor {
  /**
   * Unique identifier for the vendor.
   */
  id: number;

  /**
   * The ID of the user associated with the vendor.
   */
  userId: number;

  /**
   * The name of the vendor's store.
   */
  storeName: string;

  /**
   * Optional ID of the subscription associated with the vendor.
   */
  subscriptionId?: number;
}
