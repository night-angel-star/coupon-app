import * as Unicons from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/actions/search";

export const LastKeyword = () => {
  const lastStr = useSelector((state) => state.search.lastStr);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(setSearch(lastStr));
  };
  if (lastStr.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="flex justify-start flex-wrap">
        <div
          className="border-solid border-[2px] border-black rounded-[20px] text-[3vh] pl-3 pr-1 flex items-center justify-between w-1/3 box-border mr-2 my-1"
          onClick={() => handleSearch()}
        >
          <div>{lastStr}</div> <Unicons.UilTimes className="h-[4vh]" />
        </div>
      </div>
    );
  }
};

export default LastKeyword;
