import { SET_CATEGORY, CLEAR_CATEGORY } from "./types";
import shopService from "../../services/shop.service";

export const getCategory = () => async (dispatch) => {
  try {
    const result = await shopService.getCategories();
    if (result) {
      await dispatch({
        type: SET_CATEGORY,
        payload: result,
      });
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const clearCategory = () => async (dispatch) => {
  try {
    await dispatch({
      type: CLEAR_CATEGORY,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
