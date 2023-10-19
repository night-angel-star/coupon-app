//import { useRoutes } from "react-router-dom";
//import AppRoutes from "./AppRoutes";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { useEffect, useState } from "react";

import { getCategory } from "./redux/actions/category";
import { getBrand } from "./redux/actions/brand";
import { getGoods } from "./redux/actions/goods";
// import PrivateRoute from "./components/utlis/PrivateRoute";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import AppRoutes from "./AppRoutes";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({
    category: false,
    brand: false,
    goods: false,
  });
  useEffect(() => {
    setLoading({ category: true, brand: true, goods: true });
    const getCategoryData = async () => {
      try {
        await dispatch(getCategory());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading({ ...loading, category: false });
      }
    };

    const getBrandData = async () => {
      try {
        await dispatch(getBrand());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading({ ...loading, brand: false });
      }
    };

    const getGoodsData = async () => {
      try {
        await dispatch(getGoods());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading({ ...loading, goods: false });
      }
    };
    getCategoryData();
    getBrandData();
    getGoodsData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const routes = useRoutes(AppRoutes);
  //return routes;
  const routes = useSelector((state) => state.route);
  const route = AppRoutes.find(
    (r) => r.path.substring(1, r.path.length) === routes.name
  );
  if (route) {
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading.category || loading.brand || loading.goods}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {route.element}
      </div>
    );
  } else {
    return null; // or return a default component if no matching route is found
  }
};

export default App;
