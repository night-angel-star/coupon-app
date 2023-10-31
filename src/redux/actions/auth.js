import { LOGIN, LOGOUT } from "./types";
import authService from "../../services/auth.service";

export const login = (payload) => async (dispatch) => {
  try {
    const result = await authService.login({
      machine_id: payload.name,
      type: "Phone",
    });
    if (result) {
      localStorage.setItem("back_info", JSON.stringify(result));
    } else {
      localStorage.removeItem("back_info");
    }

    // console.log(result);
    await dispatch({
      type: LOGIN,
      payload: payload.name,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const logout = () => ({
  type: LOGOUT,
});
