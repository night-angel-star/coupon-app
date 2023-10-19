import { SET_SEARCH, CLEAR_SEARCH, CLEAR_LAST_SEARCH } from "../actions/types";

const initialState = {
  str: "",
  lastStr: "",
};

export function search(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH:
      return { ...state, str: payload, lastStr: payload };

    case CLEAR_SEARCH:
      return { ...state, str: "" };

    case CLEAR_LAST_SEARCH:
      return { ...state, lastStr: "" };

    default:
      return state;
  }
}
export default search;
