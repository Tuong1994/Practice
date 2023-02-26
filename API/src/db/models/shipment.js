"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.belongsTo(Order, {
        foreignKey: "orderId",
      });
    }
  }
  Shipment.init(
    {
      ordererName: DataTypes.STRING,
      ordererPhone: DataTypes.STRING,
      recieverName: DataTypes.STRING,
      recieverPhone: DataTypes.STRING,
      status: DataTypes.INTEGER,
      products: DataTypes.JSON,
      address: DataTypes.STRING,
      cityName: DataTypes.STRING,
      cityCode: DataTypes.STRING,
      districtName: DataTypes.STRING,
      districtCode: DataTypes.STRING,
      wardName: DataTypes.STRING,
      wardCode: DataTypes.STRING,
      orderId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Shipment",
    }
  );
  return Shipment;
};
