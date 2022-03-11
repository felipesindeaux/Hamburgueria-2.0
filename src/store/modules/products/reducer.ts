import { HANDLE_PRODUCTS } from "./actionType";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case HANDLE_PRODUCTS:
      return action.products;

    default:
      return state;
  }
};

export default productsReducer;
