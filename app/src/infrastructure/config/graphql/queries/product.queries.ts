// src/config/graphql/queries/product.queries.ts

import { gql } from '@apollo/client';

// Mutation pour ajouter un article de panier à un produit
export const ADD_CART_ITEM_TO_PRODUCT = gql`
  mutation AddCartItemToProduct($productId: Int!, $cartItem: CartItemDTO!) {
    addCartItemToProduct(productId: $productId, cartItem: $cartItem) {
      id
      name
      cartItems {
        id
        quantity
      }
    }
  }
`;

// Mutation pour ajouter une image à un produit
export const ADD_IMAGE_TO_PRODUCT = gql`
  mutation AddImageToProduct($productId: Int!, $image: ProductImageDTO!) {
    addImageToProduct(productId: $productId, image: $image) {
      id
      name
      images {
        id
        url
      }
    }
  }
`;

// Mutation pour ajouter une promotion à un produit
export const ADD_PROMOTION_TO_PRODUCT = gql`
  mutation AddPromotionToProduct($productId: Int!, $promotion: PromotionDTO!) {
    addPromotionToProduct(productId: $productId, promotion: $promotion) {
      id
      name
      promotions {
        id
        discount
      }
    }
  }
`;

// Mutation pour ajouter un avis à un produit
export const ADD_REVIEW_TO_PRODUCT = gql`
  mutation AddReviewToProduct($productId: Int!, $review: ReviewDTO!) {
    addReviewToProduct(productId: $productId, review: $review) {
      id
      name
      reviews {
        id
        content
      }
    }
  }
`;

// Mutation pour ajouter une variante à un produit
export const ADD_VARIANT_TO_PRODUCT = gql`
  mutation AddVariantToProduct($productId: Int!, $variant: ProductVariantDTO!) {
    addVariantToProduct(productId: $productId, variant: $variant) {
      id
      name
      variants {
        id
        name
        value
      }
    }
  }
`;

// Mutation pour créer un produit
export const CREATE_PRODUCT = gql`
  mutation CreateProduct($product: ProductDTO!) {
    createProduct(product: $product) {
      id
      name
      price
    }
  }
`;

// Mutation pour supprimer un produit
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: Int!) {
    deleteProduct(productId: $productId)
  }
`;

// Requête pour obtenir les produits en vedette
export const FETCH_FEATURED_PRODUCTS = gql`
  query FetchFeaturedProducts {
    fetchFeaturedProducts {
      id
      name
      price
    }
  }
`;

// Requête pour obtenir un produit par ID
export const FETCH_PRODUCT_BY_ID = gql`
  query FetchProductById($productId: Int!) {
    fetchProductById(productId: $productId) {
      id
      name
      price
    }
  }
`;

// Requête pour obtenir les produits
export const FETCH_PRODUCTS = gql`
  query FetchProducts {
    fetchProducts {
      id
      name
      price
    }
  }
`;

// Requête pour trouver des produits par catégorie
export const FIND_PRODUCTS_BY_CATEGORY = gql`
  query FindProductsByCategory($categoryId: Int!) {
    findProductsByCategory(categoryId: $categoryId) {
      id
      name
      price
    }
  }
`;

// Requête pour trouver des produits par nom
export const FIND_PRODUCTS_BY_NAME = gql`
  query FindProductsByName($name: String!) {
    findProductsByName(name: $name) {
      id
      name
      price
    }
  }
`;

// Requête pour trouver des produits par gamme de prix
export const FIND_PRODUCTS_BY_PRICE_RANGE = gql`
  query FindProductsByPriceRange($minPrice: Float!, $maxPrice: Float!) {
    findProductsByPriceRange(minPrice: $minPrice, maxPrice: $maxPrice) {
      id
      name
      price
    }
  }
`;

// Mutation pour supprimer une image d'un produit
export const REMOVE_IMAGE_FROM_PRODUCT = gql`
  mutation RemoveImageFromProduct($productId: Int!, $imageId: Int!) {
    removeImageFromProduct(productId: $productId, imageId: $imageId) {
      id
      name
    }
  }
`;

// Mutation pour supprimer une promotion d'un produit
export const REMOVE_PROMOTION_FROM_PRODUCT = gql`
  mutation RemovePromotionFromProduct($productId: Int!, $promotionId: Int!) {
    removePromotionFromProduct(productId: $productId, promotionId: $promotionId) {
      id
      name
    }
  }
`;

// Mutation pour supprimer une variante d'un produit
export const REMOVE_VARIANT_FROM_PRODUCT = gql`
  mutation RemoveVariantFromProduct($productId: Int!, $variantId: Int!) {
    removeVariantFromProduct(productId: $productId, variantId: $variantId) {
      id
      name
    }
  }
`;

// Mutation pour mettre à jour le stock d'un produit
export const UPDATE_PRODUCT_STOCK = gql`
  mutation UpdateProductStock($productId: Int!, $quantity: Int!) {
    updateProductStock(productId: $productId, quantity: $quantity) {
      id
      name
      stock
    }
  }
`;

// Mutation pour mettre à jour un produit
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($productId: Int!, $product: Partial<ProductDTO>!) {
    updateProduct(productId: $productId, product: $product) {
      id
      name
      price
    }
  }
`;