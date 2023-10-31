import { useSelector } from "react-redux";
import LastKeyword from "../../components/search/LastKeyword";
import PopularKeyword from "../../components/search/PopularKeyword";
import GoodsList from "../../components/common/GoodsList";

export const Search = () => {
  const goods = useSelector((state) => state.goods.data);
  const searchStr = useSelector((state) => state.search.str);
  const filteredGoods = goods.reduce(
    (accumulator, currentValue) =>
      currentValue.name.includes(searchStr)
        ? [...accumulator, currentValue]
        : accumulator,
    []
  );
  return (
    <div className="px-[10vw]">
      {searchStr.length === 0 ? (
        <div>
          <div>
            <div className="text-[3.5vh] mb-10">Last Keyword</div>
            <div className="mb-20">
              <LastKeyword />
            </div>
          </div>
          <div>
            <div className="text-[3.5vh] mb-10">Popular Keyword</div>
            <div>
              <PopularKeyword />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <GoodsList goods={filteredGoods} showSort />
        </div>
      )}
    </div>
  );
};

export default Search;
