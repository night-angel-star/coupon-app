export const categoryDataProcess = async (categories) => {
  let leafCategories = [];

  await categories.map((category) => {
    const children = categories.filter((c) => c.parent_id === category.id);
    if (children.length === 0) {
      leafCategories = [...leafCategories, category];
    }
    return category;
  });

  return leafCategories;
};
