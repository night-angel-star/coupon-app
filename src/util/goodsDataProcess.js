import shopService from "../services/shop.service";
const getRootCategory = (categories, categoryId) => {
  const currentCategory = categories?.find(
    (category) => category.id === categoryId
  );
  if (currentCategory.parent_id === null) {
    return currentCategory.id;
  } else {
    return getRootCategory(categories, currentCategory.parent_id);
  }
};
export const goodsDataProcess = async (data) => {
  try {
    const categories = await shopService.getAllCategories();
    if (categories) {
      const processedData = await data.reduce(
        async (accumulator, currentValue) => {
          const categoryId = currentValue.category_id;
          const rootId = await getRootCategory(categories, categoryId);

          const processedValue = { ...currentValue, root_id: rootId };
          return [...(await accumulator), processedValue];
        },
        []
      );
      return processedData;
    } else return null;
  } catch (err) {
    console.log(err);
  }
};
