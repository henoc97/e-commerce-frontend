import { Category } from './category.entity';
import { Marketplace } from './marketplace.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { Vendor } from './vendor.entity';

/**
 * Represents a shop entity in the system.
 */
export interface Shop {
    /**
     * Unique identifier for the shop.
     */
    id: number;

    /**
     * The name of the shop.
     */
    name: string;

    /**
     * The URL of the shop's website.
     */
    url: string;

    /**
     * Optional description of the shop.
     */
    description?: string;

    /**
     * The ID of the vendor associated with the shop.
     */
    vendorId: number;

    /**
     * The date and time when the shop was created.
     */
    createdAt: string;

    /**
     * The date and time when the shop was last updated.
     */
    updatedAt: string;

    /**
     * Optional ID of the marketplace where the shop is listed.
     */
    marketplaceId?: number;
}
