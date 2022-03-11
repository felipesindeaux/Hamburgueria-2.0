import { handleProducts } from "./actions";
import api from "../../../services/api";

export const getProductsThunk = () => (dispatch) => {
  api
    .get("/products")
    .then((response) => dispatch(handleProducts(response.data)));
};
