// src/config/graphql/queries/cart.queries.ts

import { gql } from '@apollo/client';

// Mutation pour ajouter un article au panier
export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($cartId: Int!, $item: CartItemDTO!) {
    addItemToCart(cartId: $cartId, item: $item) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;

// Mutation pour vider le panier
export const CLEAR_CART = gql`
  mutation ClearCart($cartId: Int!) {
    clearCart(cartId: $cartId) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;

// Mutation pour créer un panier
export const CREATE_CART = gql`
  mutation CreateCart($cart: CartDTO!) {
    createCart(cart: $cart) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;

// Mutation pour supprimer un panier
export const DELETE_CART = gql`
  mutation DeleteCart($cartId: Int!) {
    deleteCart(cartId: $cartId)
  }
`;

// Requête pour obtenir un panier par ID
export const FETCH_CART_BY_ID = gql`
  query FetchCartById($id: Int!) {
    fetchCartById(id: $id) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;

// Requête pour obtenir les paniers par ID utilisateur
export const FETCH_CART_BY_USER_ID = gql`
  query FetchCartByUserId($userId: Int!) {
    fetchCartByUserId(userId: $userId) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;

// Requête pour obtenir le nombre d'articles dans le panier
export const FETCH_ITEM_COUNT = gql`
  query FetchItemCount($cartId: Int!) {
    fetchItemCount(cartId: $cartId)
  }
`;

// Requête pour obtenir la valeur totale du panier
export const FETCH_TOTAL_VALUE = gql`
  query FetchTotalValue($cartId: Int!) {
    fetchTotalValue(cartId: $cartId)
  }
`;

// Mutation pour fusionner deux paniers
export const MERGE_CARTS = gql`
  mutation MergeCarts($sourceCartId: Int!, $targetCartId: Int!) {
    mergeCarts(sourceCartId: $sourceCartId, targetCartId: $targetCartId) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;

// Mutation pour retirer un article du panier
export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($cartId: Int!, $itemId: Int!) {
    removeItemFromCart(cartId: $cartId, itemId: $itemId) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;

// Mutation pour mettre à jour un panier
export const UPDATE_CART = gql`
  mutation UpdateCart($cartId: Int!, $data: Partial<CartDTO>!) {
    updateCart(cartId: $cartId, data: $data) {
      id
      userId
      items {
        id
        productId
        quantity
        price
      }
      totalValue
    }
  }
`;