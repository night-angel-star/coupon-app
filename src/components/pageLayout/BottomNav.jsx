import * as Unicons from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRoute } from "../../redux/actions/route";

export const BottomNav = () => {
  //const { pathname } = useLocation();
  //const [, ...pathArray] = pathname.split("/");
  //const pageName = pathArray[0];
  const dispatch = useDispatch();
  const pageName = useSelector((state) => state.route.name);
  //const pageParam = pathArray[1];
  const route = (pagename) => {
    dispatch(setRoute(pagename));
  };

  return (
    <div className="h-full flex box-border border-t-[0.5px] border-l-0 border-b-0 border-r-0 border-solid border-gray-300">
      <div
        onClick={() => route("all")}
        className="no-underline hover:no-underline text-current h-full w-1/3 flex justify-center items-center"
      >
        <div
          className={`h-full w-fit flex flex-col justify-center box-border items-center ${
            pageName === "all" || pageName === "detail" || pageName === "search"
              ? "m-t-[-0.5px] border-0 border-t-[0.5vh] border-solid border-black"
              : ""
          }`}
        >
          <Unicons.UilBars className="h-[4vh] " />
          <div className="text-[2vh]">All Items</div>
        </div>
      </div>
      <div
        onClick={() => route("home")}
        className="no-underline hover:no-underline text-current h-full w-1/3 flex justify-center items-center"
      >
        <div
          className={`flex h-full w-fit flex-col  box-border justify-center items-center ${
            pageName === "home"
              ? "m-t-[-0.5px] border-0 border-t-[0.5vh] border-solid border-black"
              : ""
          }`}
        >
          <Unicons.UilHome className="h-[4vh]" />
          <div className="text-[2vh]">Home</div>
        </div>
      </div>
      <div
        onClick={() => route("my")}
        className="no-underline hover:no-underline text-current h-full w-1/3 flex justify-center items-center"
      >
        <div
          className={`flex h-full w-fit flex-col  box-border justify-center items-center ${
            pageName === "my"
              ? "m-t-[-0.5px] border-0 border-t-[0.5vh] border-solid border-black"
              : ""
          }`}
        >
          <Unicons.UilUser className="h-[4vh]" />
          <div className="text-[2vh]">My</div>
        </div>
      </div>
    </div>
  );
};
export default BottomNav;
