import { handleCart } from "./actions";

export const addItemThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();

  const isOnCart = cart.some((product) => product.id === item.id);

  const newItem = {...item, amount: 1}

  !isOnCart && dispatch(handleCart([...cart, newItem]));
};

export const removeItemThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart];
  const indexOfItem = newCart.indexOf(item);

  newCart.splice(indexOfItem, 1);
  dispatch(handleCart(newCart));
};

export const addAmountThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart];
  const indexOfItem = newCart.indexOf(item);

  newCart[indexOfItem].amount += 1;
  dispatch(handleCart(newCart));
};

export const removeAmountThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart];
  const indexOfItem = newCart.indexOf(item);

  if (newCart[indexOfItem].amount > 1) {
    newCart[indexOfItem].amount -= 1;
    dispatch(handleCart(newCart));
  }
};
