import API from "../../services/API";
import Carousel from "react-material-ui-carousel";

export const GoodsDetailImg = (props) => {
  const { img } = props;
  return (
    <div className="w-full box-border">
      <Carousel autoPlay={false}>
        <img
          src={`${API}/uploads/${img.image1}`}
          alt="goods_detail img"
          className="w-full"
        />
        <img
          src={`${API}/uploads/${img.image2}`}
          alt="goods_detail img"
          className="w-full"
        />
        <img
          src={`${API}/uploads/${img.image3}`}
          alt="goods_detail img"
          className="w-full"
        />
      </Carousel>
    </div>
  );
};

export default GoodsDetailImg;
