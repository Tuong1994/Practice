const { City } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  try {
    const cities = await City.findAll();
    res.status(200).send(cities);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { cityId } = req.query;

  try {
    const city = await City.findOne({ where: { id: cityId } });
    res.status(200).send(city);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCity = async (req, res) => {
  const { nameEng, nameVn, code } = req.body;

  try {
    const newCity = await City.create({
      id: `CT-${utils.uuid()}`,
      nameEng,
      nameVn,
      code,
    });
    res.status(200).json({
      message: "Create success",
      city: newCity,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCity = async (req, res) => {
  const { cityId } = req.query;
  const { nameEng, nameVn, code } = req.body;

  try {
    await City.update({ nameEng, nameVn, code }, { where: { id: cityId } });
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCity = async (req, res) => {
  const { cityId } = req.query;

  try {
    await City.destroy({ where: { id: cityId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createCity,
  updateCity,
  removeCity,
};
