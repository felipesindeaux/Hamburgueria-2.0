import { FILTER } from "./actionType";

const filteredProductsReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER:
      return action.filteredProducts;

    default:
      return state;
  }
};

export default filteredProductsReducer;
