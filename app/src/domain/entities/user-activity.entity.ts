import { UserActivityAction } from '../enums/user-activity-action.enum';

/**
 * Represents a record of user activity within the system.
 * Captures details about the user's actions, including the action type, associated user, optional product, and timestamp.
 */
export interface UserActivity {
    /**
     * Unique identifier for the user activity record.
     * This ID is used to uniquely identify each user activity in the system.
     */
    id: number;

    /**
     * Unique identifier for the user who performed the activity.
     * This ID references the `User` entity associated with the activity.
     */
    userId: number;

    /**
     * Type of action performed by the user.
     * This could represent various actions such as login, view product, purchase, etc.
     */
    action: UserActivityAction;

    /**
     * Optional product ID related to the activity.
     * This property is only relevant if the action involves a specific product.
     */
    productId?: number;

    /**
     * The date and time when the activity was performed.
     * Automatically set to the current date and time when the activity is recorded.
     */
    timestamp: string;
}
