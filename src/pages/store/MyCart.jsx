import React from "react";
import { useSelector } from "react-redux";

export const MyCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return <>{JSON.stringify(cart)}</>;
};
