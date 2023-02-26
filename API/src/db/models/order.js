"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customer, Shipment }) {
      // define association here
      this.belongsTo(Customer, {
        foreignKey: "customerId",
      });
      this.hasOne(Shipment, {
        foreignKey: "orderId",
        as: "shipment",
      });
    }
  }
  Order.init(
    {
      shipmentFee: DataTypes.INTEGER,
      products: DataTypes.JSON,
      totalPay: DataTypes.INTEGER,
      paymentMethod: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      customerId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
