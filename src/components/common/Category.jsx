import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryFilter,
  clearCategoryFilter,
} from "../../redux/actions/viewFilter";

export const Category = () => {
  const categories = useSelector((state) => state.category.data);
  const categoryFilter = useSelector((state) => state.viewFilter.category);
  const dispatch = useDispatch();
  const setCategoryFilterHandler = (categoryId) => {
    dispatch(setCategoryFilter(categoryId));
  };
  const clearCategoryFilterHandler = () => {
    dispatch(clearCategoryFilter());
  };
  return (
    <div className="flex justify-start items-center h-auto max-h-[fit-content] text-[2.3vh] max-w-full overflow-x-auto border-0 border-b-[1px] border-solid border-black mb-3">
      <span
        className={`p-1 ${
          categoryFilter === ""
            ? "text-red-600 border-0 border-b-[0.7vh] border-solid"
            : ""
        }`}
        onClick={clearCategoryFilterHandler}
      >
        All
      </span>
      {categories.map((category, i) => (
        <span
          className={`p-1 ${
            categoryFilter === category.id
              ? "text-red-600 border-0 border-b-[0.7vh] border-solid"
              : ""
          }`}
          key={i}
          onClick={() => setCategoryFilterHandler(category.id)}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default Category;

// text-red-600 border-0 border-b-[1vh] border-solid
