import { gql } from '@apollo/client';

export const GET_ADDRESS_BY_ID = gql`
  query GetAddressById($id: Int!) {
    address(id: $id) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;

export const GET_ADDRESSES_BY_CITY = gql`
  query GetAddressesByCity($city: String!) {
    addressesByCity(city: $city) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;

export const CREATE_ADDRESS = gql`
  mutation CreateNewAddress($addressInput: AddressDTO!) {
    createNewAddress(addressInput: $addressInput) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;

export const UPDATE_ADDRESS = gql`
  mutation UpdateAddress($id: Int!, $addressInput: AddressDTO!) {
    updateAddress(id: $id, addressInput: $addressInput) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;

export const DELETE_ADDRESS = gql`
  mutation DeleteAddress($id: Int!) {
    deleteAddress(id: $id)
  }
`;

export const GET_ADDRESSES_BY_COUNTRY = gql`
  query GetAddressesByCountry($country: String!) {
    addressesByCountry(country: $country) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;

export const GET_ADDRESSES_BY_STATE = gql`
  query GetAddressesByState($state: String!) {
    addressesByState(state: $state) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;

export const GET_ADDRESSES_BY_POSTAL_CODE = gql`
  query GetAddressesByPostalCode($postalCode: String!) {
    addressesByPostalCode(postalCode: $postalCode) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;

export const GET_ADDRESSES_BY_USER = gql`
  query GetAddressesByUser($userId: Int!) {
    addressesByUser(userId: $userId) {
      id
      street
      city
      state
      country
      postalCode
    }
  }
`;