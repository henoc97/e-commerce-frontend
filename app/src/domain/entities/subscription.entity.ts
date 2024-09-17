import { Vendor } from './vendor.entity';

/**
 * Represents a subscription plan available to vendors.
 * Stores details about the subscription, including pricing, duration, and associated vendors.
 */
export interface Subscription {
  /**
   * Unique identifier for the subscription.
   */
  id: number;

  /**
   * Name of the subscription plan (e.g., "Basic Plan", "Premium Plan").
   */
  name: string;

  /**
   * Description of the subscription plan (optional).
   * Provides additional details about the features or benefits of the plan.
   */
  description?: string;

  /**
   * Price of the subscription plan.
   * Represents the cost associated with the subscription.
   */
  price: number;

  /**
   * Duration of the subscription in days.
   * Defines the validity period of the subscription.
   */
  duration: number;

  /**
   * The date and time when the subscription was created.
   * Automatically set to the current date and time when the subscription is created.
   */
  createdAt: string;

  /**
   * The date and time when the subscription was last updated.
   * Automatically set to the current date and time when the subscription is updated.
   */
  updatedAt: string;
}
