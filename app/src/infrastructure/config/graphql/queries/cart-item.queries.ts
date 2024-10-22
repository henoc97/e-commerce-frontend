// src/config/graphql/queries/cartItem.queries.ts

import { gql } from '@apollo/client';

// Mutation pour créer un article de panier
export const CREATE_CART_ITEM = gql`
  mutation CreateCartItem($cartItemDTO: CartItemDTO!) {
    createCartItem(cartItemDTO: $cartItemDTO) {
      id
      productId
      cartId
      quantity
      price
    }
  }
`;

// Mutation pour supprimer un article de panier
export const DELETE_CART_ITEM = gql`
  mutation DeleteCartItem($id: Int!) {
    deleteCartItem(id: $id)
  }
`;

// Requête pour obtenir un article de panier par ID
export const GET_CART_ITEM_BY_ID = gql`
  query FetchCartItemById($id: Int!) {
    fetchCartItemById(id: $id) {
      id
      productId
      cartId
      quantity
      price
    }
  }
`;

// Requête pour obtenir un article de panier par produit et panier
export const GET_CART_ITEM_BY_PRODUCT_AND_CART = gql`
  query FetchCartItemByProductAndCart($productId: Int!, $cartId: Int!) {
    fetchCartItemByProductAndCart(productId: $productId, cartId: $cartId) {
      id
      productId
      cartId
      quantity
      price
    }
  }
`;

// Requête pour obtenir les articles de panier par ID de panier
export const GET_CART_ITEMS_BY_CART_ID = gql`
  query FetchCartItemsByCartId($cartId: Int!) {
    fetchCartItemsByCartId(cartId: $cartId) {
      id
      productId
      cartId
      quantity
      price
    }
  }
`;

// Requête pour obtenir l'article de panier avec la plus grande quantité
export const GET_HIGHEST_QUANTITY_ITEM = gql`
  query FetchHighestQuantityItem($cartId: Int!) {
    fetchHighestQuantityItem(cartId: $cartId) {
      id
      productId
      cartId
      quantity
      price
    }
  }
`;

// Mutation pour mettre à jour la quantité d'un article de panier
export const UPDATE_CART_ITEM_QUANTITY = gql`
  mutation UpdateCartItemQuantity($id: Int!, $quantity: Int!) {
    updateCartItemQuantity(id: $id, quantity: $quantity) {
      id
      productId
      cartId
      quantity
      price
    }
  }
`;

// Mutation pour mettre à jour un article de panier
export const UPDATE_CART_ITEM = gql`
  mutation UpdateCartItem($id: Int!, $cartItemDTO: CartItemDTO!) {
    updateCartItem(id: $id, cartItemDTO: $cartItemDTO) {
      id
      productId
      cartId
      quantity
      price
    }
  }
`;

// Requête pour calculer le total du panier
export const CALCULATE_CART_TOTAL = gql`
  query CalculateCartTotal($cartId: Int!) {
    calculateCartTotal(cartId: $cartId)
  }
`;

// Mutation pour vider le panier
export const CLEAR_CART = gql`
  mutation ClearCart($cartId: Int!) {
    clearCart(cartId: $cartId)
  }
`;