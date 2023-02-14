const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (parent, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
  },
};
