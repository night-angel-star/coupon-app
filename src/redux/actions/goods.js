import { SET_GOODS, CLEAR_GOODS } from "./types";
import shopService from "../../services/shop.service";
// import { goodsDataProcess } from "../../util/goodsDataProcess";

export const getGoods = () => async (dispatch) => {
  try {
    const result = await shopService.getGoods();
    // const processedResult = await goodsDataProcess(result);
    if (result) {
      await dispatch({
        type: SET_GOODS,
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

export const clearGoods = () => async (dispatch) => {
  try {
    await dispatch({
      type: CLEAR_GOODS,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
