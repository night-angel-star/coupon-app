import { useSelector } from "react-redux";

export const My = () => {
  const cart = useSelector((state) => state.cart.cart);
  return <div>{JSON.stringify(cart)}</div>;
};
