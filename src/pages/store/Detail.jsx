import GoodsDetailImg from "../../components/common/GoodsDetailImg";
import * as Unicons from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/actions/cart";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export const Detail = () => {
  // const { pathname } = useLocation();
  // const [, ...pathArray] = pathname.split("/");
  // const pageName = pathArray[0];
  // const pageName = useSelector((state) => state.route.name);
  const dispatch = useDispatch();
  const pageParam = useSelector((state) => state.route.param);
  // const pageParam = pathArray[1];
  const goodsData = useSelector((state) => state.goods.data);
  const goodsInfo = goodsData.find(
    (item) => item.id === Number.parseInt(pageParam)
  );
  // const cartInfo = useSelector((state) => state.cart.cart);

  // const cartIndex = cartInfo.findIndex((obj) => obj.id === goodsInfo.id);

  const addToCart = (id) => {
    dispatch(setCart({ id: id, count: 1 }));
  };

  return (
    <div className="p-[3vw] flex flex-col h-full box-border">
      <div className="flex-grow overflow-y-auto">
        <div className="w-full">
          <GoodsDetailImg
            img={{
              image1: goodsInfo.image1,
              image2: goodsInfo.image2,
              image3: goodsInfo.image3,
            }}
          />
        </div>
        <div className="flex flex-col items-center box-border w-full">
          <div className="text-[3vh] my-1">{goodsInfo.category}</div>
          <div className="text-[2.8vh] my-1">{goodsInfo.name}</div>
          <div className="text-[3.3vh] my-1">
            <span className="text-red-500 mx-[3px]">{`${goodsInfo.discount}%`}</span>
            <span className=" mx-[3px]">{`$${
              goodsInfo.price - (goodsInfo.price * goodsInfo.discount) / 100
            }`}</span>
            <span className=" mx-[3px] text-[2vh] line-through">{`$${goodsInfo.price}`}</span>
          </div>
        </div>

        <div className="min-h-[0.5vh] bg-red-100 m-[-3vw] box-border my-2 w-full"></div>
        <div className="w-full">
          <div className="flex justify-center items-center p-3 text-[3.3vh]">
            Item Details
          </div>
          <p className="text-[2.8vh]">{`${goodsInfo.desc}`}</p>
        </div>
      </div>
      <div className="flex m-[-3vw] h-[6vh]">
        <div
          className="bg-black text-white w-[30vw] flex justify-center items-center p-1 text-[3vh]"
          onClick={() => addToCart(goodsInfo.id)}
        >
          <Unicons.UilShoppingCartAlt className="h-[3vh] " />
          Cart
        </div>
        <div className="bg-red-600 text-white w-[70vw] flex justify-center items-center p-1 text-[3vh]">
          <Unicons.UilCoins className="h-[3vh] " />
          Buy
        </div>
      </div>
    </div>
  );
};

export default Detail;
