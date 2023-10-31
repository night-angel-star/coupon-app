import { useDispatch, useSelector } from "react-redux";
import {
  setBrandFilter,
  clearBrandFilter,
} from "../../redux/actions/viewFilter";
import API from "../../services/API";

export const Brand = () => {
  const brands = useSelector((state) => state.brand.data);
  const brandFilter = useSelector((state) => state.viewFilter.brand);
  const dispatch = useDispatch();
  const setBrandFilterHandler = (brandId) => {
    dispatch(setBrandFilter(brandId));
  };
  const clearBrandFilterHandler = () => {
    dispatch(clearBrandFilter());
  };

  return (
    <div>
      <div className="text-[4vh]">Popular Brand</div>
      <div className="flex overflow-auto my-2">
        {brands.map((brand, i) => (
          <div
            className="mr-2"
            key={i}
            onClick={() =>
              brand.id !== brandFilter
                ? setBrandFilterHandler(brand.id)
                : clearBrandFilterHandler()
            }
          >
            <div className="flex justify-center">
              <div
                className={`flex justify-center border-[0.3vh] border-solid ${
                  brand.id === brandFilter ? "border-red-700" : "border-black"
                } p-[2px] h-[5vh] w-[5vh]`}
              >
                <img
                  src={`${API}/uploads/${brand.image1}`}
                  alt="brand item"
                  className="h-[100%] w-[100%]"
                />
              </div>
            </div>
            <div className="text-[2.5vh] flex justify-center m-1">
              {brand.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
