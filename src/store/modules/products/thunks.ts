import { getProducts } from "./actions";
import api from "../../../services/api";

export const getProductsThunk = () => (dispatch) => {
  api.get("/products").then((response) => dispatch(getProducts(response.data)));
};
