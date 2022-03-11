import { HANDLE_CART } from "./actionType";

export const handleCart = (newCart) => ({
  type: HANDLE_CART,
  newCart,
});
