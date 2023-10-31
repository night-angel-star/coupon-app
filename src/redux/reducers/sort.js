import { SET_SORT, CLEAR_SORT } from "../actions/types";

const initialState = {
  direction: true,
};

export function sort(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SET_SORT:
      const newDirection = state.direction ? false : true;
      return { ...state, direction: newDirection };
    case CLEAR_SORT:
      return { ...state, direction: true };
    default:
      return state;
  }
}
export default sort;
