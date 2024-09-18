import { IPromotionRepository } from '../../domain/repositories/promotion.repository';
import { Promotion } from '../../domain/entities/promotion.entity';

/**
* Service class for handling Promotion-related operations.
* It provides methods that call the underlying repository.
*/
export class PromotionService {

  /**
   * Constructor for PromotionService.
   * Injects the repository dependency.
   *
   * @param promotionRepository - The repository that handles Promotion data operations.
   */
  constructor(private readonly promotionRepository: IPromotionRepository) {  }

  /**
* Service method for create.
* Calls the repository's create method.
* @param promotion - The Promotion required by the repository method.
* @returns Promise<Promotion> - The result from the repository method.
*/
public async create(promotion: Promotion): Promise<Promotion> {
  return await this.promotionRepository.create(promotion);
}

/**
* Service method for getById.
* Calls the repository's getById method.
* @param id - The number required by the repository method.
* @returns Promise<Promotion | null> - The result from the repository method.
*/
public async getById(id: number): Promise<Promotion | null> {
  return await this.promotionRepository.getById(id);
}

/**
* Service method for modify.
* Calls the repository's modify method.
* @param id - The number required by the repository method.
* @param updates - The Partial required by the repository method.
* @returns Promise<Promotion> - The result from the repository method.
*/
public async modify(id: number, updates: Partial<Promotion>): Promise<Promotion> {
  return await this.promotionRepository.modify(id, updates);
}

/**
* Service method for remove.
* Calls the repository's remove method.
* @param id - The number required by the repository method.
* @returns Promise<boolean> - The result from the repository method.
*/
public async remove(id: number): Promise<boolean> {
  return await this.promotionRepository.remove(id);
}

/**
* Service method for getByProduct.
* Calls the repository's getByProduct method.
* @param productId - The number required by the repository method.
* @returns Promise<Promotion[]> - The result from the repository method.
*/
public async getByProduct(productId: number): Promise<Promotion[]> {
  return await this.promotionRepository.getByProduct(productId);
}

/**
* Service method for getActiveBetween.
* Calls the repository's getActiveBetween method.
* @param start - The Date required by the repository method.
* @param end - The Date required by the repository method.
* @returns Promise<Promotion[]> - The result from the repository method.
*/
public async getActiveBetween(start: Date, end: Date): Promise<Promotion[]> {
  return await this.promotionRepository.getActiveBetween(start, end);
}

/**
* Service method for getActive.
* Calls the repository's getActive method.
* @returns Promise<Promotion[]> - The result from the repository method.
*/
public async getActive(): Promise<Promotion[]> {
  return await this.promotionRepository.getActive();
}

/**
* Service method for getBestForProduct.
* Calls the repository's getBestForProduct method.
* @param productId - The number required by the repository method.
* @returns Promise<Promotion | null> - The result from the repository method.
*/
public async getBestForProduct(productId: number): Promise<Promotion | null> {
  return await this.promotionRepository.getBestForProduct(productId);
}

/**
* Service method for combine.
* Calls the repository's combine method.
* @param promotions - The Promotion required by the repository method.
* @returns Promise<Promotion | null> - The result from the repository method.
*/
public async combine(promotions: Promotion[]): Promise<Promotion | null> {
  return await this.promotionRepository.combine(promotions);
}

/**
* Service method for applyToProduct.
* Calls the repository's applyToProduct method.
* @param productId - The number required by the repository method.
* @param promotionId - The number required by the repository method.
* @returns Promise<Promotion> - The result from the repository method.
*/
public async applyToProduct(productId: number, promotionId: number): Promise<Promotion> {
  return await this.promotionRepository.applyToProduct(productId, promotionId);
}


}
