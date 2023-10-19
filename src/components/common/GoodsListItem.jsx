// import { useNavigate } from "react-router-dom";
import API from "../../services/API";
import { useDispatch } from "react-redux";
import { setRoute } from "../../redux/actions/route";

export const GoodsListItem = (props) => {
  // const navigate = useNavigate();
  const { goodsInfo } = props;
  const openDetail = () => {
    //navigate(`/detail/${goodsInfo.id}`);
    route("detail", goodsInfo.id);
  };
  const dispatch = useDispatch();
  //const pageParam = pathArray[1];
  const route = (pagename, pageParam) => {
    dispatch(setRoute(pagename, pageParam));
  };
  return (
    <div className="w-1/2 p-2 box-border">
      <div className="w-full">
        <img
          src={`${API}/uploads/${goodsInfo.image1}`}
          alt="goods"
          className="w-full"
          onClick={openDetail}
        ></img>
      </div>
      <div className="text-[3vh]">{goodsInfo.category}</div>
      <div className="text-[2vh]">{goodsInfo.name}</div>
      <div className="text-[1.8vh] line-through text-[rgb(150,87,87)]">{`$${goodsInfo.price}`}</div>
      <div className="text-[1.7vh]">
        <span className="text-red-700">{`${goodsInfo.discount}%`}</span>
        <span>{`$${
          goodsInfo.price - (goodsInfo.price * goodsInfo.discount) / 100
        }`}</span>
      </div>
    </div>
  );
};

export default GoodsListItem;
