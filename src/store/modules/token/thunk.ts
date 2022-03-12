import api from "../../../services/api";
import { signIn } from "./actions";
import { toast } from "react-toastify";

export const signInThunk = (userData) => (dispatch) => {
  api
    .post("/login", userData)
    .then((response) => {
      localStorage.setItem("@Hamburgueria:token", response.data.accessToken);

      toast.success("Logado com sucesso");
      dispatch(signIn(response.data.accessToken));
    })
    .catch((_) => toast.error("Email ou senha inválidos!"));
};
