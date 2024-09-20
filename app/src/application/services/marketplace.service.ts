import { injectable, inject } from 'tsyringe';
import type { IMarketplaceRepository } from '../../domain/repositories/marketplace.repository';
import { IMarketplaceRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Marketplace } from '../../domain/entities/marketplace.entity';
import { Shop } from '../../domain/entities/shop.entity';

/**
 * Service class for handling Marketplace-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class MarketplaceService {
    /**
     * Constructor for MarketplaceService.
     * Injects the repository dependency.
     *
     * @param marketplaceRepository - The repository that handles Marketplace data operations.
     */
    constructor(
        @inject(IMarketplaceRepositoryToken)
        private readonly marketplaceRepository: IMarketplaceRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param marketplace - The Marketplace required by the repository method.
     * @returns Promise<Marketplace> - The result from the repository method.
     */
    public async create(marketplace: Marketplace): Promise<Marketplace> {
        return await this.marketplaceRepository.create(marketplace);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Marketplace | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Marketplace | null> {
        return await this.marketplaceRepository.getById(id);
    }

    /**
     * Service method for list.
     * Calls the repository's list method.
     * @returns Promise<Marketplace[]> - The result from the repository method.
     */
    public async list(): Promise<Marketplace[]> {
        return await this.marketplaceRepository.list();
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param data - The Partial required by the repository method.
     * @returns Promise<Marketplace> - The result from the repository method.
     */
    public async update(
        id: number,
        data: Partial<Marketplace>
    ): Promise<Marketplace> {
        return await this.marketplaceRepository.update(id, data);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.marketplaceRepository.delete(id);
    }

    /**
     * Service method for addShop.
     * Calls the repository's addShop method.
     * @param marketplaceId - The number required by the repository method.
     * @param shop - The Shop required by the repository method.
     * @returns Promise<Marketplace> - The result from the repository method.
     */
    public async addShop(
        marketplaceId: number,
        shop: Shop
    ): Promise<Marketplace> {
        return await this.marketplaceRepository.addShop(marketplaceId, shop);
    }

    /**
     * Service method for removeShop.
     * Calls the repository's removeShop method.
     * @param marketplaceId - The number required by the repository method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Marketplace> - The result from the repository method.
     */
    public async removeShop(
        marketplaceId: number,
        shopId: number
    ): Promise<Marketplace> {
        return await this.marketplaceRepository.removeShop(
            marketplaceId,
            shopId
        );
    }

    /**
     * Service method for getShops.
     * Calls the repository's getShops method.
     * @param marketplaceId - The number required by the repository method.
     * @returns Promise<Shop[]> - The result from the repository method.
     */
    public async getShops(marketplaceId: number): Promise<Shop[]> {
        return await this.marketplaceRepository.getShops(marketplaceId);
    }

    /**
     * Service method for getMarketplaceByShopId.
     * Calls the repository's getMarketplaceByShopId method.
     * @param shopId - The number required by the repository method.
     * @returns Promise<Marketplace | null> - The result from the repository method.
     */
    public async getMarketplaceByShopId(
        shopId: number
    ): Promise<Marketplace | null> {
        return await this.marketplaceRepository.getMarketplaceByShopId(shopId);
    }
}
