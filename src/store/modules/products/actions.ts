import { GET_PRODUCTS } from "./actionType";

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products,
});
