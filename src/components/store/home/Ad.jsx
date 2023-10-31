import API from "../../../services/API";
import AD2 from "../../../assets/img/ad2.png";
import AD3 from "../../../assets/img/ad3.png";
import Carousel from "react-material-ui-carousel";
import { useDispatch } from "react-redux";
import { setRoute } from "../../../redux/actions/route";
import {
  clearCategoryFilter,
  clearBrandFilter,
} from "../../../redux/actions/viewFilter";

export const Ad = () => {
  const dispatch = useDispatch();
  const route = (pagename) => {
    dispatch(setRoute(pagename));
    dispatch(clearCategoryFilter());
    dispatch(clearBrandFilter());
  };
  return (
    <div>
      <Carousel indicators={false}>
        <img
          src={`${API}/uploads/Advertisement1.jpg`}
          alt="ad1"
          className="w-full rounded-lg"
        />
        <img
          src={`${API}/uploads/Advertisement2.jpg`}
          alt="ad1"
          className="w-full rounded-lg"
        />
        <img
          src={`${API}/uploads/Advertisement3.jpg`}
          alt="ad1"
          className="w-full rounded-lg"
        />
      </Carousel>
      <div className="flex mt-[1vh] justify-between">
        <div>
          <img
            src={AD2}
            alt="ad2"
            className="w-[45vw] rounded-lg"
            onClick={() => route("all")}
          ></img>
        </div>
        <div>
          <img src={AD3} alt="ad3" className="w-[45vw] rounded-lg"></img>
        </div>
      </div>
    </div>
  );
};
export default Ad;
