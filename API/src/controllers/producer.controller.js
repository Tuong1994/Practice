const { Producer } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  try {
    const producers = await Producer.findAll();
    res.status(200).send(producers);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { producerId } = req.query;

  try {
    const producer = await Producer.findOne({ where: { id: producerId } });
    res.status(200).send(producer);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createProducer = async (req, res) => {
  const { nameENG, nameVN } = props;

  try {
    const newProducer = await Producer.create({
      id: `PR-${utils.uuid()}`,
      nameENG,
      nameVN,
    });
    res.status(200).json({
      message: "Create success",
      producer: newProducer,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProducer = async (req, res) => {
  const { producerId } = req.query;
  const { nameENG, nameVN } = req.body;

  try {
    await Producer.update({ nameENG, nameVN }, { where: { id: producerId } });
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeProducer = async (req, res) => {
  const { producerId } = req.query;

  try {
    await Producer.destroy({ where: { id: producerId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createProducer,
  updateProducer,
  removeProducer,
};
