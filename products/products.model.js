const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 22.54,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 112.94,
  },
];

function getAllProducts() {
  return products;
}
// this function could change based on what the data looks like
function getProductsByPrice(minPrice, maxPrice) {
  return products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
