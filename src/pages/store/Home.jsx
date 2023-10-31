import Ad from "../../components/store/home/Ad";
import Category from "../../components/common/Category";
import { useSelector } from "react-redux";
import GoodsList from "../../components/common/GoodsList";
export const Home = () => {
  const goods = useSelector((state) => state.goods.data);
  const categoryFilter = useSelector((state) => state.viewFilter.category);
  const sortedGoods = goods.reduce((accumulator, currentValue) => {
    if (categoryFilter === currentValue.category_id || categoryFilter === "") {
      return [...accumulator, currentValue];
    } else {
      return accumulator;
    }
  }, []);
  return (
    <div className="p-[3vw]">
      <Ad />
      <div className="text-[3.5vh] flex justify-center items-center my-3">
        Popular
      </div>
      <Category />
      <GoodsList goods={sortedGoods} />
    </div>
  );
};

export default Home;
