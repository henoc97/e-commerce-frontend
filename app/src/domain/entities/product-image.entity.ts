import { Product } from './product.entity';

/**
 * Represents an image associated with a product.
 */
export interface ProductImage {
    /**
     * Unique identifier for the product image.
     */
    id: number;

    /**
     * Foreign key linking this image to a Product.
     */
    productId: number;

    /**
     * URL where the image is located.
     */
    url: string;
}
