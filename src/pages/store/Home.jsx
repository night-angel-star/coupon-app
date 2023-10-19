import Ad from "../../components/store/home/Ad";
import Category from "../../components/common/Category";
import GoodsListItem from "../../components/common/GoodsListItem";
import { useSelector } from "react-redux";
export const Home = () => {
  const goods = useSelector((state) => state.goods.data);
  const categoryFilter = useSelector((state) => state.viewFilter.category);
  return (
    <div className="p-[3vw]">
      <Ad />
      <div className="text-[3.5vh] flex justify-center items-center my-3">
        Popular
      </div>
      <Category />
      <div className="flex flex-wrap justify-start">
        {goods?.map(
          (goodsItem, i) =>
            (categoryFilter === goodsItem.root_id || categoryFilter === "") && (
              <GoodsListItem goodsInfo={goodsItem} key={i} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
