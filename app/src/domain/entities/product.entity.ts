import { Promotion } from './promotion.entity';
import { Vendor } from './vendor.entity';
import { Shop } from './shop.entity';
import { Category } from './category.entity';
import { ProductImage } from './product-image.entity';
import { ProductVariant } from './product-variant.entity';
import { CartItem } from './cart-item.entity';
import { Review } from './review.entity';
import { OrderItem } from './order-item.entity';

/**
 * Represents a product entity in the system.
 */
export interface Product {
  /**
   * Unique identifier for the product.
   */
  id: number;

  /**
   * The name of the product.
   */
  name: string;

  /**
   * Optional description of the product.
   */
  description?: string;

  /**
   * The price of the product.
   */
  price: number;

  /**
   * The ID of the category to which the product belongs.
   */
  categoryId: number;

  /**
   * The quantity of the product available in stock.
   */
  stock: number;

  /**
   * The ID of the vendor associated with the product (optional).
   */
  vendorId?: number;

  /**
   * The ID of the shop where the product is listed.
   */
  shopId: number;

  /**
   * The date and time when the product was created.
   */
  createdAt: string;

  /**
   * The date and time when the product was last updated.
   */
  updatedAt: string;
}
