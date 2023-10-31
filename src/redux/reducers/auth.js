import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  name: null,
  loginState: 0,
};

export function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { name: payload, loginState: 1 };

    case LOGOUT:
      return { name: null, loginState: 0 };

    default:
      return state;
  }
}
export default auth;
