import { SING_IN } from "./actionType";

export const singIn = (token) => ({
  type: SING_IN,
  token,
});
