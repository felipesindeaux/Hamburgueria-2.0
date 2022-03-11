import { HANDLE_CART } from "./actionType";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case HANDLE_CART:
        return action.newCart

    default:
      return state;
  }
};

export default cartReducer
