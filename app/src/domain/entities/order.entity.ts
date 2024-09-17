import { User } from './user.entity';
import { Shop } from './shop.entity';
import { OrderStatus } from '../enums/order-status.enum';
import { Payment } from './payment.entity';
import { Refund } from './refund.entity';
import { OrderItem } from './order-item.enttity';
import { Shipment } from './shippement.entity';
import { ShippingMethod } from '../enums/shipping-method.enum';

/**
 * Represents an order placed by a user in a shop.
 * Contains information about the order items, status, total amount, and related payment and refund details.
 */
export interface Order {
  /**
   * Unique identifier for the Order.
   */
  id: number;

  /**
   * Unique identifier for the User who placed the order.
   */
  userId: number;

  /**
   * Unique identifier for the Shop where the order was placed.
   */
  shopId: number;

  /**
   * Status of the Order (e.g., Pending, Shipped, Delivered).
   */
  status: OrderStatus;

  /**
   * Total amount for the Order.
   */
  totalAmount: number;

  /**
   * Unique identifier for the Payment associated with the Order.
   */
  paymentId?: string;

  /**
   * Tracking number for the Order shipment.
   */
  trackingNumber?: string;

  /**
   * Foreign key for the Shipment associated with the Order.
   */
  shipmentId?: number;

  /**
   * Shipping method used for the Order.
   */
  shippingMethod: ShippingMethod;

  /**
   * Date and time when the Order was created.
   */
  createdAt: string;

  /**
   * Date and time when the Order was last updated.
   */
  updatedAt: string;
}
