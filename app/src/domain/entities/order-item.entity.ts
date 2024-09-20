import { Order } from './order.entity';
import { Product } from './product.entity';

/**
 * Represents an item in an order.
 * Contains information about the product, quantity, and price of the item in the order.
 */
export interface OrderItem {
    /**
     * Unique identifier for the OrderItem.
     */
    id: number;

    /**
     * Unique identifier for the Order to which this item belongs.
     */
    orderId: number;

    /**
     * Unique identifier for the Product that is included in this order item.
     */
    productId: number;

    /**
     * Quantity of the Product included in this order item.
     */
    quantity: number;

    /**
     * Price of the Product at the time of the order.
     */
    price: number;
}
