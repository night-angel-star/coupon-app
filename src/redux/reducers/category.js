import { SET_CATEGORY, CLEAR_CATEGORY } from "../actions/types";

const initialState = {
  data: [],
};

export function category(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORY:
      return { data: payload };
    case CLEAR_CATEGORY:
      return { data: [] };

    default:
      return state;
  }
}
export default category;
