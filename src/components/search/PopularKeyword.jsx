import { useState, useEffect } from "react";
import shopService from "../../services/shop.service";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/search";

export const PopularKeyword = () => {
  const [searchKey, setSearchKey] = useState([]);
  const dispatch = useDispatch();
  const handleSearch = (str) => {
    dispatch(setSearch(str));
  };
  useEffect(() => {
    const getSearchKey = async () => {
      const result = await shopService.getSearchKey();
      setSearchKey(result);
    };
    getSearchKey();
  }, []);
  return (
    <div className="flex justify-start flex-wrap">
      {searchKey.length > 0 &&
        searchKey.map((value, i) => (
          <div
            className="text-[2.5vh] w-1/2 box-border my-2"
            key={i}
            onClick={() => handleSearch(value.key)}
          >
            {i + 1}. {value.key}
          </div>
        ))}
    </div>
  );
};
export default PopularKeyword;
