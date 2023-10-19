import { SET_GOODS, CLEAR_GOODS } from "../actions/types";

const initialState = {
  data: [],
};

export function goods(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GOODS:
      return { data: payload };
    case CLEAR_GOODS:
      return { data: [] };

    default:
      return state;
  }
}
export default goods;
