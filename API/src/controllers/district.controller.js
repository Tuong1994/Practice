const { District } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  const { cityCode } = req.query;

  try {
    const districts = await District.findAll({ where: { cityCode } });
    res.status(200).send(districts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { districtId } = req.query;

  try {
    const district = await District.findOne({ where: { id: districtId } });
    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createDistrict = async (req, res) => {
  const { nameEng, nameVn, code, cityId, cityCode } = req.body;

  try {
    const newDistrict = await District.create({
      id: `D-${utils.uuid()}`,
      nameEng,
      nameVn,
      code,
      cityId,
      cityCode,
    });
    res.status(200).json({
      message: "Create success",
      district: newDistrict,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateDistrict = async (req, res) => {
  const { districtId } = req.query;
  const { nameEng, nameVn, code, cityId, cityCode } = req.body;

  try {
    await District.update(
      { nameEng, nameVn, code, cityId, cityCode },
      { where: { id: districtId } }
    );
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeDistrict = async (req, res) => {
  const { districtId } = req.query;

  try {
    await District.destroy({ where: { id: districtId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createDistrict,
  updateDistrict,
  removeDistrict,
};
