import { ShopService } from '../../services/shop.service';

/**
 * Use case class for getOrderReport.
 * This class encapsulates the business logic for getOrderReport.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class GetOrderReportShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the getOrderReport use case.
     * @param shopId - The number required by the service method.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<any>.
     */
    async execute(
        shopId: number,
        startDate: Date,
        endDate: Date
    ): Promise<any> {
        const result = await this.service.getOrderReport(
            shopId,
            startDate,
            endDate
        );

        return result;
    }
}
