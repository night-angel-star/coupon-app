import Category from "../../components/common/Category";
import Brand from "../../components/common/Brand";
import * as Unicons from "@iconscout/react-unicons";
import GoodsListItem from "../../components/common/GoodsListItem";
import { useSelector } from "react-redux";

export const All = () => {
  const goods = useSelector((state) => state.goods.data);
  const categoryFilter = useSelector((state) => state.viewFilter.category);
  const brandFilter = useSelector((state) => state.viewFilter.brand);
  return (
    <div className="p-[3vw]">
      <div>
        <Category />
      </div>
      <div>
        <Brand />
      </div>
      <div className="min-h-[1.5vh] bg-red-100 m-[-3vw] box-border"></div>
      <div className="py-[4vh] px-[2vw] flex justify-between items-center">
        <div className="text-[3vh]">Total 3000</div>
        <div className="text-[3vh] items-center">
          <Unicons.UilSort className="h-[3vh]" />
          Sort
        </div>
      </div>
      <div className="min-h-[0.5vh] bg-red-100 m-[-3vw] box-border"></div>

      <div className="flex flex-wrap justify-start py-[1vh]">
        {goods.map(
          (goodsItem, i) =>
            (categoryFilter === goodsItem.root_id || categoryFilter === "") &&
            (brandFilter === goodsItem.brand_id || brandFilter === "") && (
              <GoodsListItem goodsInfo={goodsItem} key={i} />
            )
        )}
      </div>
    </div>
  );
};

export default All;
