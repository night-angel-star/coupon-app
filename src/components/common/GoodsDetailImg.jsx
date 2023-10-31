import API from "../../services/API";
import Carousel from "react-material-ui-carousel";

export const GoodsDetailImg = (props) => {
  const { img } = props;
  const imgList = [];
  if (img.image1) {
    imgList.push(img.image1);
  }
  if (img.image2) {
    imgList.push(img.image2);
  }
  if (img.image3) {
    imgList.push(img.image3);
  }
  return (
    <div className="w-full box-border">
      <Carousel autoPlay={false}>
        {imgList.map((imgItem, i) => (
          <img
            src={`${API}/uploads/${imgItem}`}
            alt="goods_detail img"
            className="w-full"
            key={i}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default GoodsDetailImg;
