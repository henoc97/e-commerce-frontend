import { User } from './user.entity';

/**
 * Represents a user's profile.
 */
export interface UserProfile {
  /**
   * Unique identifier for the user profile.
   */
  id: number;

  /**
   * Identifier of the user to whom this profile belongs.
   */
  userId: number;

  /**
   * Phone number of the user (optional).
   */
  phone?: string;

  /**
   * Date of birth of the user (optional).
   */
  birthday?: string;

  /**
   * Gender of the user (optional).
   */
  gender?: string;
}
