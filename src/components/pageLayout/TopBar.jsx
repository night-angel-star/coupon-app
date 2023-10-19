import * as Unicons from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRoute } from "../../redux/actions/route";
import { useRef } from "react";
import { setSearch, clearSearch } from "../../redux/actions/search";
import shopService from "../../services/shop.service";

export const TopBar = () => {
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.route.name);
  const pageParam = useSelector((state) => state.route.param);
  //const pageParam = pathArray[1];
  const route = (pagename) => {
    dispatch(setRoute(pagename));
  };
  const searchRef = useRef();
  //const { pathname } = useLocation();
  //const [, ...pathArray] = pathname.split("/");
  //const navigate = useNavigate();
  //const pageName = pathArray[0];
  const searchStr = useSelector((state) => state.search.str);
  const goBack = () => {
    if (pageName === "search" && searchStr.length !== 0) {
      handleClearSearch();
    } else {
      dispatch(setRoute("home"));
    }
  };
  //const pageParam = pathArray[1];
  const goodsData = useSelector((state) => state.goods.data);
  const goodsInfo = goodsData?.find(
    (item) => item.id === Number.parseInt(pageParam)
  );

  const handleSearch = () => {
    const searchStr = searchRef.current.value;
    if (searchStr) {
      dispatch(setSearch(searchStr));
      shopService.sendSearchKey({ key: searchStr });
    }
  };
  const handleClearSearch = () => {
    dispatch(clearSearch());
  };
  return (
    <div className="h-full flex justify-between items-center pl-[3vw] pr-[3vw] text-[2.5vh]">
      <div className="flex justify-start items-center flex-grow">
        {pageName === "search" || pageName === "detail" || pageName === "my" ? (
          <Unicons.UilArrowLeft className="h-[4vh] w-[5vh]" onClick={goBack} />
        ) : (
          ""
        )}
        {(() => {
          switch (pageName) {
            case "home":
              return <div>Coupon App</div>;
            case "all":
              return <div>Category</div>;
            case "my":
              return <div>My Page</div>;
            case "search":
              if (searchStr.length === 0) {
                return (
                  <input
                    className=" w-full  rounded-full h-[2.3vh] border-[2px] border-solid border-black px-2 py-[2px] text-[2.7vh] mr-2 "
                    ref={searchRef}
                  />
                );
              } else {
                return <div>Search Result</div>;
              }

            case "detail":
              return <div>{goodsInfo.name}</div>;
            default:
              return null;
          }
        })()}
      </div>
      <div>
        {pageName !== "search" ? (
          <div
            className="no-underline hover:no-underline"
            onClick={() => route("search")}
          >
            <Unicons.UilSearch className="h-[3vh]" />
          </div>
        ) : searchStr.length === 0 ? (
          <Unicons.UilSearch className="h-[3vh]" onClick={handleSearch} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default TopBar;
