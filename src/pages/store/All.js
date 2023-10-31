import Category from "../../components/common/Category";
import Brand from "../../components/common/Brand";

import GoodsList from "../../components/common/GoodsList";
import { useSelector } from "react-redux";

export const All = () => {
  const goods = useSelector((state) => state.goods.data);
  const categoryFilter = useSelector((state) => state.viewFilter.category);
  const brandFilter = useSelector((state) => state.viewFilter.brand);
  const sortedGoods = goods.reduce((accumulator, currentValue) => {
    if (
      (categoryFilter === currentValue.category_id || categoryFilter === "") &&
      (brandFilter === currentValue.brand_id || brandFilter === "")
    ) {
      return [...accumulator, currentValue];
    } else {
      return accumulator;
    }
  }, []);
  return (
    <div className="p-[3vw]">
      <div>
        <Category />
      </div>
      <div>
        <Brand />
      </div>
      <div className="min-h-[1.5vh] bg-red-100 m-[-3vw] box-border"></div>
      <div className="py-[1vh]">
        <GoodsList goods={sortedGoods} showSort />
      </div>
    </div>
  );
};

export default All;
