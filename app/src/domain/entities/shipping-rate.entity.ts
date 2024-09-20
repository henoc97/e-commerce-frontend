/**
 * Represents a Shipping Rate for a specific carrier and zone.
 */
export interface ShippingRate {
    /**
     * Unique identifier for the shipping rate.
     */
    id: number;

    /**
     * Foreign key referring to the carrier associated with this shipping rate.
     */
    carrierId: number;

    /**
     * Foreign key referring to the zone where this rate applies.
     */
    zoneId: number;

    /**
     * Minimum weight for this shipping rate, in kilograms.
     */
    weightMin: number;

    /**
     * Maximum weight for this shipping rate, in kilograms.
     */
    weightMax: number;

    /**
     * Cost for shipping within the weight range.
     */
    cost: number;

    /**
     * Currency used for the shipping rate (e.g., EUR, XOF).
     */
    currency: string;

    /**
     * Timestamp when the shipping rate was created.
     */
    createdAt: string;

    /**
     * Timestamp when the shipping rate was last updated.
     */
    updatedAt: string;
}
