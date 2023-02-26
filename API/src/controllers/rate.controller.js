const { Rate } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  const { customerId, page, limit } = req.query;

  try {
    let rates = [];

    if (customerId) rates = await Rate.findAll({ where: { customerId } });
    else rates = await Rate.findAll();

    const newList = utils.paging(rates, page, limit);

    res.status(200).send(newList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { rateId } = req.query;

  try {
    const rate = await Rate.findOne({ where: { id: rateId } });
    res.status(200).send(rate);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createRate = async (req, res) => {
  const { point, note, customerId, productId, productName } = req.body;

  try {
    const newRate = await Rate.create({
      id: `R-${utils.uuid()}`,
      point,
      note,
      customerId,
      productId,
      productName,
    });
    res.status(200).json({
      message: "Create success",
      rate: newRate,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateRate = async (req, res) => {
  const { rateId } = req.query;
  const { point, note, customerId, productId, productName } = req.body;

  try {
    await Rate.update(
      { point, note, customerId, productId, productName },
      { where: { id: rateId } }
    );
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeRate = async (req, res) => {
  const { rateId } = req.query;

  try {
    await Rate.destroy({ where: { id: rateId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createRate,
  updateRate,
  removeRate,
};
