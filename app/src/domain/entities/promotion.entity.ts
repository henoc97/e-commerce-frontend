import { DiscountType } from '../enums/discount-type.enum';
import { Product } from './product.entity';

/**
 * Represents a promotional offer for a product.
 * Stores details about the promotion, including discount value, type, and validity period.
 */
export interface Promotion {
    /**
     * Unique identifier for the promotion.
     */
    id: number;

    /**
     * Name of the promotion (e.g., "Summer Sale", "Black Friday Discount").
     */
    name: string;

    /**
     * The amount or percentage of the discount applied.
     * The interpretation depends on the discountType (e.g., flat amount or percentage).
     */
    discountValue: number;

    /**
     * Type of discount applied (e.g., FLAT_AMOUNT, PERCENTAGE).
     */
    discountType: DiscountType;

    /**
     * The date when the promotion starts.
     */
    startDate: string;

    /**
     * The date when the promotion ends.
     */
    endDate: string;

    /**
     * Unique identifier for the product that the promotion applies to.
     */
    productId: number;

    /**
     * The date and time when the promotion was created.
     */
    createdAt: string;

    /**
     * The date and time when the promotion was last updated.
     */
    updatedAt: string;
}
