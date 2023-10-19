import { SET_CART, CLEAR_CART } from "./types";

export const setCart = (payload) => ({
  type: SET_CART,
  payload: payload,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
