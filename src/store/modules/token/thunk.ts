import api from "../../../services/api";
import { singIn } from "./actions";
import { toast } from "react-toastify";

export const singInThunk = (userData) => (dispatch) => {
  api
    .post("/login", userData)
    .then((response) => {
      localStorage.setItem("@Hamburgueria:token", response.data.accessToken);

      toast.success("Logado com sucesso");
      dispatch(singIn(response.data.accessToken));
    })
    .catch((_) => toast.error("Email ou senha inválidos!"));
};
