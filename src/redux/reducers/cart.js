import { SET_CART, CLEAR_CART } from "../actions/types";

const initialState = {
  cart: [],
};

export function cart(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CART:
      const cartInfo = state.cart;
      const index = cartInfo.findIndex((obj) => obj.id === payload.id);
      let newCartInfo = [];
      if (index !== -1) {
        cartInfo.splice(index, 1);
        newCartInfo = [...cartInfo];
      } else {
        cartInfo.push(payload);
        newCartInfo = [...cartInfo];
      }
      return { ...state, cart: newCartInfo };

    case CLEAR_CART:
      return { ...state, cart: [] };

    default:
      return state;
  }
}
export default cart;
