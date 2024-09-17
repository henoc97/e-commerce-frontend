
/**
 * Represents a Carrier responsible for shipping logistics.
 */
export interface Carrier {
  /**
   * Unique identifier for the carrier.
   */
  id: number;

  /**
   * The name of the carrier.
   */
  name: string;

  /**
   * The country where the carrier operates.
   */
  country: string;

  /**
   * Specific region or city where the carrier operates (if applicable).
   */
  region?: string;

  /**
   * URL of the carrier's external API, if available.
   */
  externalAPI?: string;

  /**
   * Additional capabilities or notes about the carrier (e.g., 'Refrigerated', 'Express').
   */
  capabilities?: string;
}
