import { filterProducts } from "./actions";
import api from "../../../services/api";

export const getFilteredProductsThunk = () => (dispatch, getState) => {
    api
    .get("/products")
    .then((response) => dispatch(filterProducts(response.data)));
}

export const filterProductsThunk = (value) => (dispatch, getState) => {
  const { products } = getState();

  if (value === ''){
    dispatch(filterProducts(products));
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase())
  );

  dispatch(filterProducts(filteredProducts));
};
