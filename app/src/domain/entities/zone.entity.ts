import { Carrier } from './carrier.entity';
import { ShippingRate } from './shipping-rate.entity';

/**
 * Represents a Zone where shipping rates apply.
 */
export interface Zone {
    /**
     * Unique identifier for the zone.
     */
    id: number;

    /**
     * The country of the zone.
     */
    country: string;

    /**
     * Specific region or city within the country (optional).
     */
    region?: string;
}
