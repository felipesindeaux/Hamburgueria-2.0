import { SIGN_IN } from "./actionType";

export const signIn = (token) => ({
  type: SIGN_IN,
  token,
});
