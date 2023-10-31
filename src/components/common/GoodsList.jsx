import GoodsListItem from "./GoodsListItem";
import * as Unicons from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/actions/sort";

export const GoodsList = (props) => {
  const { goods, showSort } = props;
  const dispatch = useDispatch();
  const setSortHandler = () => {
    dispatch(setSort());
  };
  const sortDirection = useSelector((state) => state.sort.direction);

  const sortedGoods = goods.sort((a, b) =>
    sortDirection ? b.rate - a.rate : a.rate - b.rate
  );

  return (
    <div>
      {showSort && (
        <div>
          <div className="py-[4vh] px-[2vw] flex justify-between items-center">
            <div className="text-[3vh]">Total {goods.length}</div>
            <div className="text-[3vh] items-center" onClick={setSortHandler}>
              <Unicons.UilSort className="h-[3vh]" />
              Sort
            </div>
          </div>
          <div className="min-h-[0.5vh] bg-red-100 m-[-3vw] box-border"></div>
        </div>
      )}
      <div className="flex flex-wrap justify-start">
        {sortedGoods?.map((goodsItem, i) => (
          <GoodsListItem goodsInfo={goodsItem} key={i} />
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
