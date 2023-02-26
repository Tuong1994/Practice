"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ District }) {
      // define association here
      this.hasMany(District, {
        foreignKey: "cityId",
        as: "districts",
      });
    }
  }
  City.init(
    {
      nameEng: DataTypes.STRING,
      nameVn: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
