/**
 * Represents a category for organizing products.
 * Categories can have parent and child categories.
 */
export interface Category {
    /**
     * Unique identifier for the Category.
     */
    id: number;

    /**
     * Name of the Category.
     */
    name: string;

    /**
     * ID of the parent Category.
     */
    parentId?: number;

    /**
     * ID of the Shop this category belongs to.
     */
    shopId?: number;
}
