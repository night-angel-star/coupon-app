import { SET_BRAND, CLEAR_BRAND } from "./types";
import shopService from "../../services/shop.service";

export const getBrand = () => async (dispatch) => {
  try {
    const result = await shopService.getBrands();
    if (result) {
      await dispatch({
        type: SET_BRAND,
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

export const clearBrand = () => async (dispatch) => {
  try {
    await dispatch({
      type: CLEAR_BRAND,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
