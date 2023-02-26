const { Cart } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  try {
    const carts = await Cart.findAll();
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { customerId } = req.query;

  try {
    const cart = await Cart.findOne({ where: { customerId: customerId } });
    if (cart) {
      res.status(200).send(cart);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCart = async (req, res) => {
  const { products, customerId } = req.body;

  try {
    const newCart = await Cart.create({
      id: `CA-${utils.uuid()}`,
      products,
      customerId,
    });
    res.status(200).json({
      message: "Create success",
      cart: newCart,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCart = async (req, res) => {
  const { cartId } = req.query;
  const { products, customerId } = req.body;

  try {
    await Cart.update({ products, customerId }, { where: { id: cartId } });
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCart = async (req, res) => {
  const { cartId } = req.query;

  try {
    await Cart.destroy({ where: { id: cartId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createCart,
  updateCart,
  removeCart,
};
