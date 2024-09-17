

/**
 * Represents a review for a product.
 * Stores details about the rating, comment, and associated user and product.
 */
export interface Review {
  /**
   * Unique identifier for the Review.
   */
  id: number;

  /**
   * Unique identifier for the Product associated with this review.
   */
  productId: number;

  /**
   * Unique identifier for the User who wrote the review.
   */
  userId: number;

  /**
   * The rating given in the review, usually on a scale from 1 to 5.
   */
  rating: number;

  /**
   * Optional comment provided by the user.
   */
  comment?: string;

  /**
   * The date and time when the review was created.
   */
  createdAt: string;
}
