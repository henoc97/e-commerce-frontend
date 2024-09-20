/**
 * Represents a Shipment associated with an order.
 */
export interface Shipment {
    /**
     * Unique identifier for the shipment.
     */
    id: number;

    /**
     * Foreign key referring to the order associated with this shipment.
     */
    orderId?: number;

    /**
     * Foreign key referring to the carrier handling this shipment.
     */
    carrierId: number;

    /**
     * Tracking number for this shipment.
     */
    trackingNumber: string;

    /**
     * Current status of the shipment.
     */
    status: string;

    /**
     * Date when the shipment was dispatched.
     */
    shippedAt?: string;

    /**
     * Date when the shipment was delivered.
     */
    deliveredAt?: string;

    /**
     * Date when the status was last updated.
     */
    statusUpdatedAt?: string;

    /**
     * Timestamp when the shipment was created.
     */
    createdAt: string;

    /**
     * Timestamp when the shipment was last updated.
     */
    updatedAt: string;
}
