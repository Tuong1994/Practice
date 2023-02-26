"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Spec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, {
        foreignKey: "productId",
      });
    }
  }
  Spec.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      productId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Spec",
    }
  );
  return Spec;
};
