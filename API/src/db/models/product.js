"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Producer, Spec }) {
      // define association here
      this.belongsTo(Category, {
        foreignKey: "categoryId",
      });
      this.belongsTo(Producer, {
        foreignKey: "producerId",
      });
      this.hasMany(Spec, {
        foreignKey: "productId",
        as: "specs",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      images: DataTypes.JSON,
      newImages: DataTypes.JSON,
      initialCapital: DataTypes.INTEGER,
      profitPercent: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      warranty: DataTypes.INTEGER,
      inventory: DataTypes.INTEGER,
      inventoryStatus: DataTypes.INTEGER,
      bestSale: DataTypes.BOOLEAN,
      outstand: DataTypes.BOOLEAN,
      categoryId: DataTypes.STRING,
      producerId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
