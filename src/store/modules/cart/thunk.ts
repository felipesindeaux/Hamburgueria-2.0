import { handleCart } from "./actions";

export const addItemThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();

  const isOnCart = cart.some((product) => product.id === item.id);

  const newItem = { ...item, amount: 1 };

  if (!isOnCart) {
    localStorage.setItem(
      "@Hamburgueria:cart",
      JSON.stringify([...cart, newItem])
    );
    dispatch(handleCart([...cart, newItem]));
  }
};

export const removeItemThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart];
  const indexOfItem = newCart.indexOf(item);

  newCart.splice(indexOfItem, 1);
  localStorage.setItem("@Hamburgueria:cart", JSON.stringify(newCart));
  dispatch(handleCart(newCart));
};

export const removeAllThunk = () => (dispatch) => {
  localStorage.setItem("@Hamburgueria:cart", JSON.stringify([]));
  dispatch(handleCart([]));
};

export const addAmountThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart];
  const indexOfItem = newCart.indexOf(item);

  newCart[indexOfItem].amount += 1;
  localStorage.setItem("@Hamburgueria:cart", JSON.stringify(newCart));
  dispatch(handleCart(newCart));
};

export const removeAmountThunk = (item) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart];
  const indexOfItem = newCart.indexOf(item);

  if (newCart[indexOfItem].amount > 1) {
    newCart[indexOfItem].amount -= 1;
    localStorage.setItem("@Hamburgueria:cart", JSON.stringify(newCart));
    dispatch(handleCart(newCart));
  }
};
