import { SET_BRAND, CLEAR_BRAND } from "../actions/types";

const initialState = {
  data: [],
};

export function brand(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_BRAND:
      return { data: payload };
    case CLEAR_BRAND:
      return { data: [] };

    default:
      return state;
  }
}
export default brand;
