import { Product } from './product.entity';

/**
 * Represents a variant of a product, such as different sizes or colors.
 */
export interface ProductVariant {
  /**
   * Unique identifier for the ProductVariant.
   */
  id: number;

  /**
   * ID of the associated Product.
   */
  productId: number;

  /**
   * Name of the variant, such as 'Size' or 'Color'.
   */
  name: string;

  /**
   * Value of the variant, such as 'Large' or 'Red'.
   */
  value: string;
}
