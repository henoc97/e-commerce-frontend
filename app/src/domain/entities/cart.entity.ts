import { CartItem } from './cart-item.entity';
import { User } from './user.entity';

/**
 * Represents a shopping cart for a user.
 * The cart holds items that the user intends to purchase.
 */
export interface Cart {
    /**
     * Unique identifier for the Cart.
     */
    id: number;

    /**
     * Unique identifier for the User who owns the Cart.
     */
    userId: number;
}
