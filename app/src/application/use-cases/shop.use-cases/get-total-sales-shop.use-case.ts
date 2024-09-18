import { ShopService } from '../../services/shop.service';

/**
 * Use case class for getTotalSales.
 * This class encapsulates the business logic for getTotalSales.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class GetTotalSalesShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the getTotalSales use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(shopId: number): Promise<number> {
        const result = await this.service.getTotalSales(shopId);

        return result;
    }
}
