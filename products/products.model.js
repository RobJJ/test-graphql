const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 22.54,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 112.94,
    reviews: [],
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

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    reviews: [],
    price,
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const reviewedProduct = products.find((product) => product.id === id);
  if (reviewedProduct) {
    const newReview = {
      rating,
      comment,
    };
    reviewedProduct.reviews.push(newReview);
    return newReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
