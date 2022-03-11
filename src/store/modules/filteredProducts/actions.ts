import { FILTER } from "./actionType";

export const filterProducts = (filteredProducts) => ({
  type: FILTER,
  filteredProducts,
});
