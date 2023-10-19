import {
  SET_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  SET_BRAND_FILTER,
  CLEAR_BRAND_FILTER,
} from "../actions/types";

const initialState = {
  category: "",
  brand: "",
};

export function viewFilter(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORY_FILTER:
      return { ...state, category: payload };

    case CLEAR_CATEGORY_FILTER:
      return { ...state, category: "" };

    case SET_BRAND_FILTER:
      return { ...state, brand: payload };

    case CLEAR_BRAND_FILTER:
      return { ...state, brand: "" };

    default:
      return state;
  }
}
export default viewFilter;
