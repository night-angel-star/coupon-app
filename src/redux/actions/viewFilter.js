import {
  SET_CATEGORY_FILTER,
  CLEAR_CATEGORY_FILTER,
  SET_BRAND_FILTER,
  CLEAR_BRAND_FILTER,
} from "./types";

export const setCategoryFilter = (payload) => ({
  type: SET_CATEGORY_FILTER,
  payload: payload,
});

export const clearCategoryFilter = () => ({
  type: CLEAR_CATEGORY_FILTER,
});

export const setBrandFilter = (payload) => ({
  type: SET_BRAND_FILTER,
  payload: payload,
});

export const clearBrandFilter = () => ({
  type: CLEAR_BRAND_FILTER,
});
