const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.54,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 12.94,
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
