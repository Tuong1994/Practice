"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.hasMany(Order, {
        foreignKey: "customerId",
        as: "orders",
      });
    }
  }
  Customer.init(
    {
      account: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      cityCode: DataTypes.STRING,
      cityName: DataTypes.STRING,
      districtCode: DataTypes.STRING,
      districtName: DataTypes.STRING,
      wardCode: DataTypes.STRING,
      wardName: DataTypes.STRING,
      gender: DataTypes.INTEGER,
      birthday: DataTypes.DATE,
      avatar: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
