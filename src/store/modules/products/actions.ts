import { HANDLE_PRODUCTS } from "./actionType";

export const handleProducts = (products) => ({
  type: HANDLE_PRODUCTS,
  products,
});
