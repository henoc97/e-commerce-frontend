import { IVendorRepository } from '../../domain/repositories/vendor.repository';
import { Vendor } from '../../domain/entities/vendor.entity';
import { Product } from '../../domain/entities/product.entity';
import { Subscription } from '../../domain/entities/subscription.entity';
import { Shop } from '../../domain/entities/shop.entity';

/**
 * Service class for handling Vendor-related operations.
 * It provides methods that call the underlying repository.
 */
export class VendorService {
    /**
     * Constructor for VendorService.
     * Injects the repository dependency.
     *
     * @param vendorRepository - The repository that handles Vendor data operations.
     */
    constructor(private readonly vendorRepository: IVendorRepository) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param vendor - The Vendor required by the repository method.
     * @returns Promise<Vendor> - The result from the repository method.
     */
    public async create(vendor: Vendor): Promise<Vendor> {
        return await this.vendorRepository.create(vendor);
    }

    /**
     * Service method for findById.
     * Calls the repository's findById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Vendor | null> - The result from the repository method.
     */
    public async findById(id: number): Promise<Vendor | null> {
        return await this.vendorRepository.findById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param data - The Partial required by the repository method.
     * @returns Promise<Vendor> - The result from the repository method.
     */
    public async update(id: number, data: Partial<Vendor>): Promise<Vendor> {
        return await this.vendorRepository.update(id, data);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.vendorRepository.delete(id);
    }

    /**
     * Service method for findByStoreName.
     * Calls the repository's findByStoreName method.
     * @param storeName - The string required by the repository method.
     * @returns Promise<Vendor[]> - The result from the repository method.
     */
    public async findByStoreName(storeName: string): Promise<Vendor[]> {
        return await this.vendorRepository.findByStoreName(storeName);
    }

    /**
     * Service method for addProduct.
     * Calls the repository's addProduct method.
     * @param vendorId - The number required by the repository method.
     * @param product - The Product required by the repository method.
     * @returns Promise<Vendor> - The result from the repository method.
     */
    public async addProduct(
        vendorId: number,
        product: Product
    ): Promise<Vendor> {
        return await this.vendorRepository.addProduct(vendorId, product);
    }

    /**
     * Service method for removeProduct.
     * Calls the repository's removeProduct method.
     * @param vendorId - The number required by the repository method.
     * @param productId - The number required by the repository method.
     * @returns Promise<Vendor> - The result from the repository method.
     */
    public async removeProduct(
        vendorId: number,
        productId: number
    ): Promise<Vendor> {
        return await this.vendorRepository.removeProduct(vendorId, productId);
    }

    /**
     * Service method for getProducts.
     * Calls the repository's getProducts method.
     * @param vendorId - The number required by the repository method.
     * @returns Promise<Product[]> - The result from the repository method.
     */
    public async getProducts(vendorId: number): Promise<Product[]> {
        return await this.vendorRepository.getProducts(vendorId);
    }

    /**
     * Service method for getSubscription.
     * Calls the repository's getSubscription method.
     * @param vendorId - The number required by the repository method.
     * @returns Promise<Subscription | null> - The result from the repository method.
     */
    public async getSubscription(
        vendorId: number
    ): Promise<Subscription | null> {
        return await this.vendorRepository.getSubscription(vendorId);
    }

    /**
     * Service method for getShop.
     * Calls the repository's getShop method.
     * @param vendorId - The number required by the repository method.
     * @returns Promise<Shop | null> - The result from the repository method.
     */
    public async getShop(vendorId: number): Promise<Shop | null> {
        return await this.vendorRepository.getShop(vendorId);
    }

    /**
     * Service method for setShop.
     * Calls the repository's setShop method.
     * @param vendorId - The number required by the repository method.
     * @param shop - The Shop required by the repository method.
     * @returns Promise<Vendor> - The result from the repository method.
     */
    public async setShop(vendorId: number, shop: Shop): Promise<Vendor> {
        return await this.vendorRepository.setShop(vendorId, shop);
    }

    /**
     * Service method for findByUser.
     * Calls the repository's findByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Vendor[]> - The result from the repository method.
     */
    public async findByUser(userId: number): Promise<Vendor[]> {
        return await this.vendorRepository.findByUser(userId);
    }

    /**
     * Service method for findBySubscription.
     * Calls the repository's findBySubscription method.
     * @param subscriptionId - The number required by the repository method.
     * @returns Promise<Vendor[]> - The result from the repository method.
     */
    public async findBySubscription(subscriptionId: number): Promise<Vendor[]> {
        return await this.vendorRepository.findBySubscription(subscriptionId);
    }

    /**
     * Service method for getall.
     * Calls the repository's getall method.
     * @returns Promise<Vendor[]> - The result from the repository method.
     */
    public async getall(): Promise<Vendor[]> {
        return await this.vendorRepository.getall();
    }

    /**
     * Service method for getLatest.
     * Calls the repository's getLatest method.
     * @returns Promise<Vendor | null> - The result from the repository method.
     */
    public async getLatest(): Promise<Vendor | null> {
        return await this.vendorRepository.getLatest();
    }
}
