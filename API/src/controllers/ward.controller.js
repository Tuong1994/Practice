const { Ward } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  const { districtCode } = req.query;

  try {
    const wards = await Ward.findAll({ where: { districtCode } });
    res.status(200).send(wards);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { wardId } = req.query;

  try {
    const ward = await Ward.findOne({ where: { id: wardId } });
    res.status(200).send(ward);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createWard = async (req, res) => {
  const { nameEng, nameVn, code, districtCode, districtId } = req.body;

  try {
    const newWard = await Ward.create({
      id: `W-${utils.uuid()}`,
      nameEng,
      nameVn,
      code,
      districtCode,
      districtId,
    });
    res.status(200).json({
      message: "Create success",
      ward: newWard,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateWard = async (req, res) => {
  const { wardId } = req.query;
  const { nameEng, nameVn, code, districtCode, districtId } = req.body;

  try {
    await Ward.update(
      { nameEng, nameVn, code, districtCode, districtId },
      { where: { id: wardId } }
    );
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeWard = async (req, res) => {
  const { wardId } = req.query;

  try {
    await Ward.destroy({ where: { id: wardId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createWard,
  updateWard,
  removeWard,
};
