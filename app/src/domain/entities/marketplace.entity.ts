
/**
 * Represents a marketplace in the system.
 * A marketplace consists of multiple shops and may have a description.
 */
export interface Marketplace {
  /**
   * Unique identifier for the marketplace.
   * This ID is used to uniquely identify each marketplace in the system.
   */
  id: number;

  /**
   * Name of the marketplace.
   * Represents the name of the marketplace for display and identification.
   */
  name: string;

  /**
   * Description of the marketplace.
   * An optional field that provides additional information about the marketplace.
   */
  description?: string;
}
