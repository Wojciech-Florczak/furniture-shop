export default function getCategories(products) {
  let categories = {};
  for (let product of products) {
    categories[product.category] = (categories[product.category] || 0) + 1;
  }
  let orderedCategories = {};
  Object.keys(categories)
    .sort()
    .forEach(key => (orderedCategories[key] = categories[key]));
  return orderedCategories;
}
