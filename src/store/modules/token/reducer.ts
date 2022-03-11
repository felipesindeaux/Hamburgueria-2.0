import { SING_IN } from "./actionType";

const token = localStorage.getItem("@Hamburgueria:token") || "";

const tokenReducer = (state = token, action) => {
  switch (action.type) {
    case SING_IN:
      return action.token;

    default:
      return state;
  }
};

export default tokenReducer;
