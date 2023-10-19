import { combineReducers } from "redux";
import category from "./category";
import brand from "./brand";
import goods from "./goods";
import viewFilter from "./viewFilter";
import route from "./route";
import cart from "./cart";
import search from "./search";

export default combineReducers({
  category,
  brand,
  goods,
  viewFilter,
  route,
  cart,
  search,
});
