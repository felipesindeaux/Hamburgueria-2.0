import { HANDLE_CART } from "./actionType";

const initialState =
  JSON.parse(`${localStorage.getItem("@Hamburgueria:cart")}`) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CART:
      return action.newCart;

    default:
      return state;
  }
};

export default cartReducer;
