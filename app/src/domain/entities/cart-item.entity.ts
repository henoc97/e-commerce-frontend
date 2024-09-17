

/**
 * Represents an item in a shopping cart.
 * Each CartItem links a specific product with a quantity to a cart.
 */
export interface CartItem {
  /**
   * Unique identifier for the CartItem.
   */
  id: number;

  /**
   * Unique identifier for the Cart to which this item belongs.
   */
  cartId: number;

  /**
   * Unique identifier for the Product associated with this CartItem.
   */
  productId: number;

  /**
   * Quantity of the Product in the CartItem.
   */
  quantity: number;
}
