import { injectable, inject } from 'tsyringe';
import type { IShopRepository } from '../../domain/repositories/shop.repository';
import { IShopRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Shop } from '../../domain/entities/shop.entity';
import { Product } from '../../domain/entities/product.entity';
import { Order } from '../../domain/entities/order.entity';
import { Category } from '../../domain/entities/category.entity';
import { Marketplace } from '../../domain/entities/marketplace.entity';

/**
 * Service class for handling Shop-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class ShopService {
    /**
     * Constructor for ShopService.
     * Injects the repository dependency.
     *
     * @param shopRepository - The repository that handles Shop data operations.
     */
    constructor(
        @inject(IShopRepositoryToken)
        private readonly shopRepository: IShopRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param shop - The Shop required by the repository method.
     * @returns Promise<Shop> - The result from the repository method.
     */
    public async create(shop: Shop): Promise<Shop> {
        return await this.shopRepository.create(shop);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Shop | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Shop | null> {
        return await this.shopRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Shop> - The result from the repository method.
     */
    public async update(id: number, updates: Partial<Shop>): Promise<Shop> {
        return await this.shopRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.shopRepository.delete(id);
    }

    /**
     * Service method for searchByName.
     * Calls the repository's searchByName method.
     * @param name - The string required by the repository method.
     * @returns Promise<Shop[]> - The result from the repository method.
     */
    public async searchByName(name: string): Promise<Shop[]> {
        return await this.shopRepository.searchByName(name);
    }

    /**
     * Service method for addProduct.
     * Calls the repository's addProduct method.
     * @param shopId - The number required by the repository method.
     * @param product - The Product required by the repository method.
     * @returns Promise<Shop> - The result from the repository method.
     */
    public async addProduct(shopId: number, product: Product): Promise<Shop> {
        return await this.shopRepository.addProduct(shopId, product);
    }

    /**
     * Service method for removeProduct.
     * Calls the repository's removeProduct method.
     * @param shopId - The number required by the repository method.
     * @param productId - The number required by the repository method.
     * @returns Promise<Shop> - The result from the repository method.
     */
    public async removeProduct(
        shopId: number,
        productId: number
    ): Promise<Shop> {
        return await this.shopRepository.removeProduct(shopId, productId);
    }

    /**
     * Service method for listProducts.
     * Calls the repository's listProducts method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Product[]> - The result from the repository method.
     */
    public async listProducts(shopId: number): Promise<Product[]> {
        return await this.shopRepository.listProducts(shopId);
    }

    /**
     * Service method for addOrder.
     * Calls the repository's addOrder method.
     * @param shopId - The number required by the repository method.
     * @param order - The Order required by the repository method.
     * @returns Promise<Shop> - The result from the repository method.
     */
    public async addOrder(shopId: number, order: Order): Promise<Shop> {
        return await this.shopRepository.addOrder(shopId, order);
    }

    /**
     * Service method for listOrders.
     * Calls the repository's listOrders method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Order[]> - The result from the repository method.
     */
    public async listOrders(shopId: number): Promise<Order[]> {
        return await this.shopRepository.listOrders(shopId);
    }

    /**
     * Service method for addCategory.
     * Calls the repository's addCategory method.
     * @param shopId - The number required by the repository method.
     * @param category - The Category required by the repository method.
     * @returns Promise<Shop> - The result from the repository method.
     */
    public async addCategory(
        shopId: number,
        category: Category
    ): Promise<Shop> {
        return await this.shopRepository.addCategory(shopId, category);
    }

    /**
     * Service method for removeCategory.
     * Calls the repository's removeCategory method.
     * @param shopId - The number required by the repository method.
     * @param categoryId - The number required by the repository method.
     * @returns Promise<Shop> - The result from the repository method.
     */
    public async removeCategory(
        shopId: number,
        categoryId: number
    ): Promise<Shop> {
        return await this.shopRepository.removeCategory(shopId, categoryId);
    }

    /**
     * Service method for listCategories.
     * Calls the repository's listCategories method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Category[]> - The result from the repository method.
     */
    public async listCategories(shopId: number): Promise<Category[]> {
        return await this.shopRepository.listCategories(shopId);
    }

    /**
     * Service method for getMarketplace.
     * Calls the repository's getMarketplace method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Marketplace | null> - The result from the repository method.
     */
    public async getMarketplace(shopId: number): Promise<Marketplace | null> {
        return await this.shopRepository.getMarketplace(shopId);
    }

    /**
     * Service method for listByVendor.
     * Calls the repository's listByVendor method.
     * @param vendorId - The number required by the repository method.
     * @returns Promise<Shop[]> - The result from the repository method.
     */
    public async listByVendor(vendorId: number): Promise<Shop[]> {
        return await this.shopRepository.listByVendor(vendorId);
    }

    /**
     * Service method for getMostRecent.
     * Calls the repository's getMostRecent method.
     * @returns Promise<Shop | null> - The result from the repository method.
     */
    public async getMostRecent(): Promise<Shop | null> {
        return await this.shopRepository.getMostRecent();
    }

    /**
     * Service method for getTotalSales.
     * Calls the repository's getTotalSales method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getTotalSales(shopId: number): Promise<number> {
        return await this.shopRepository.getTotalSales(shopId);
    }

    /**
     * Service method for getTopProduct.
     * Calls the repository's getTopProduct method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Product> - The result from the repository method.
     */
    public async getTopProduct(shopId: number): Promise<Product> {
        return await this.shopRepository.getTopProduct(shopId);
    }
}
