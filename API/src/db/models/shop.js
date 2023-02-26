'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shop.init({
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    customerId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    producerId: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};