/**
 * Represents a Subsite within the main site.
 * Contains details about the Subsite, including its title, associated user, configuration, and creation date.
 */
export interface Subsite {
    /**
     * Unique identifier for the Subsite.
     * This ID is used to uniquely identify each Subsite in the system.
     */
    id: number;

    /**
     * Title of the Subsite.
     * This property stores the name or title of the Subsite.
     */
    title: string;

    /**
     * Unique identifier for the user who owns or manages the Subsite.
     * This ID references the `User` entity associated with the Subsite.
     */
    userId: number;

    /**
     * JSON configuration for the Subsite.
     * This property stores various settings and parameters for customizing the Subsite.
     */
    config: any; // JSON configuration

    /**
     * The date and time when the Subsite was created.
     * Automatically set to the current date and time when the Subsite is created.
     */
    createdAt: string;
}
