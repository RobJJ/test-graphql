const ordersModel = require("./orders.model");

// keep resolves thin and lean
module.exports = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    },
  },
};
