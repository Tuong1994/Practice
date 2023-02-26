const { Category } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { categoryId } = req.query;

  try {
    const category = await Category.findOne({ where: { id: categoryId } });
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCategory = async (req, res) => {
  const { nameENG, nameVN } = props;

  try {
    const newCategory = await Category.create({
      id: `CG-${utils.uuid()}`,
      nameENG,
      nameVN,
    });
    res.status(200).json({
      message: "Create success",
      category: newCategory,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.query;
  const { nameENG, nameVN } = req.body;

  try {
    await Category.update({ nameENG, nameVN }, { where: { id: categoryId } });
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCategory = async (req, res) => {
  const { categoryId } = req.query;

  try {
    await Category.destroy({ where: { id: categoryId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createCategory,
  updateCategory,
  removeCategory,
};
