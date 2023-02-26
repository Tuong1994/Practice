"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ City, Ward }) {
      // define association here
      this.belongsTo(City, {
        foreignKey: "cityId",
      });
      this.hasMany(Ward, {
        foreignKey: "districtId",
        as: "wards",
      });
    }
  }
  District.init(
    {
      nameEng: DataTypes.STRING,
      nameVn: DataTypes.STRING,
      code: DataTypes.STRING,
      cityCode: DataTypes.STRING,
      cityId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "District",
    }
  );
  return District;
};
