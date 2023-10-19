import { SET_SEARCH, CLEAR_SEARCH, CLEAR_LAST_SEARCH } from "./types";

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload: payload,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

export const clearLastSearch = () => ({
  type: CLEAR_LAST_SEARCH,
});
