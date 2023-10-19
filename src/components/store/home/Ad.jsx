import API from "../../../services/API";
import AD2 from "../../../assets/img/ad2.png";
import AD3 from "../../../assets/img/ad3.png";
import Carousel from "react-material-ui-carousel";

export const Ad = () => {
  return (
    <div>
      <Carousel indicators={false}>
        <img
          src={`${API}/uploads/advertisement1.jpg`}
          alt="ad1"
          className="w-full rounded-lg"
        />
        <img
          src={`${API}/uploads/advertisement2.jpg`}
          alt="ad1"
          className="w-full rounded-lg"
        />
        <img
          src={`${API}/uploads/advertisement3.jpg`}
          alt="ad1"
          className="w-full rounded-lg"
        />
      </Carousel>
      <div className="flex mt-[1vh] justify-between">
        <div>
          <img src={AD2} alt="ad2" className="w-[45vw] rounded-lg"></img>
        </div>
        <div>
          <img src={AD3} alt="ad3" className="w-[45vw] rounded-lg"></img>
        </div>
      </div>
    </div>
  );
};
export default Ad;
