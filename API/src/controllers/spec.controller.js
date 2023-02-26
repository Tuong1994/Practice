const { Spec } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  try {
    const specs = await Spec.findAll();
    res.status(200).send(specs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { specId } = req.query;

  try {
    const spec = await Spec.findOne({ where: { id: specId } });
    res.status(200).send(spec);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSpec = async (req, res) => {
  const { title, content, productId } = req.body;

  try {
    const newSpec = await Spec.create({
      id: `SP-${utils.uuid()}`,
      title,
      content,
      productId,
    });
    res.status(200).json({
      message: "Create success",
      spec: newSpec,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSpec = async (req, res) => {
  const { specId } = req.query;
  const { title, content, productId } = req.body;

  try {
    await Spec.update({ title, content, productId }, { where: { id: specId } });
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeSpec = async (req, res) => {
  const { specId } = req.query;

  try {
    await Spec.destroy({ where: { id: specId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createSpec,
  updateSpec,
  removeSpec,
};
