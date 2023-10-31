import { MyCart } from "./MyCart";
import { Login } from "./Login";
import { useSelector } from "react-redux";

export const My = () => {
  const loginState = useSelector((state) => state.auth.loginState);
  return loginState ? <MyCart /> : <Login />;
};
