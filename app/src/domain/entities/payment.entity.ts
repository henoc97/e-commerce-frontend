import { PaymentStatus } from '../enums/payment-status.enum';
import { Order } from './order.entity';

/**
 * Represents a payment made for an order.
 * Stores details about the payment method, status, amount, and other related information.
 */
export interface Payment {
    /**
     * Unique identifier for the Payment.
     */
    id: number;

    /**
     * Unique identifier for the Order associated with this payment.
     */
    orderId: number;

    /**
     * The method used for the payment (e.g., Stripe, PayPal, Bank Transfer).
     */
    method: string;

    /**
     * The status of the payment (e.g., SUCCESS, FAILED, PENDING).
     */
    status: PaymentStatus;

    /**
     * The amount of money that was paid.
     */
    amount: number;

    /**
     * Optional provider identifier used by the payment provider.
     * This can be used for tracking or referencing the transaction with the provider.
     */
    providerId?: string;

    /**
     * Optional metadata associated with the payment.
     * This can include any additional information or details provided by the payment provider.
     */
    metadata?: any;

    /**
     * The date and time when the payment was created.
     * Automatically set to the current date and time when a Payment is created.
     */
    createdAt: string;
}
