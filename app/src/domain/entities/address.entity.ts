/**
 * Represents an Address associated with a User.
 */
export interface Address {
    /**
     * Unique identifier for the address.
     */
    id: number;

    /**
     * Foreign key referring to the User who owns this address.
     */
    userId: number;

    /**
     * Street address.
     */
    street: string;

    /**
     * City where the address is located.
     */
    city: string;

    /**
     * State or region where the address is located.
     */
    state: string;

    /**
     * Postal code for the address.
     */
    postalCode: string;

    /**
     * Country where the address is located.
     */
    country: string;
}
