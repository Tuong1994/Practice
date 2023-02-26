const { Order, Shipment } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  const { customerId, page, limit } = req.query;

  try {
    let orders = [];

    if (customerId)
      orders = await Order.findAll({
        where: { customerId },
        include: { model: Shipment, as: "shipment" },
      });
    else
      orders = await Order.findAll({
        include: { model: Shipment, as: "shipment" },
      });

    const newList = utils.paging(orders, page, limit);
    
    res.status(200).send(newList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { orderId } = req.query;

  try {
    const order = await Order.findOne({ where: { id: orderId } });
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createOrder = async (req, res) => {
  const {
    shipmentFee,
    shipment,
    products,
    totalPay,
    paymentMethod,
    status,
    customerId,
  } = req.body;

  try {
    const newOrder = await Order.create({
      id: `O-${utils.uuid()}`,
      shipmentFee,
      products,
      totalPay,
      paymentMethod,
      status,
      customerId,
    });

    if (shipment) {
      if (newOrder) {
        const order = {
          ...newOrder?.toJSON(),
          shipment,
        };
        const newShipment = {
          ...shipment,
          id: `SH-${utils.uuid()}`,
          orderId: newOrder.id,
        };
        await Shipment.create(newShipment);

        return res.status(200).json({
          message: "Create success",
          order: order,
        });
      }
    }
    return res.status(200).json({
      message: "Create success",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.query;
  const { shipmentFee, products, totalPay, paymentMethod, status, customerId } =
    req.body;

  try {
    await Order.update(
      { shipmentFee, products, totalPay, paymentMethod, status, customerId },
      { where: { id: orderId } }
    );
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeOrder = async (req, res) => {
  const { orderId } = req.query;

  try {
    await Order.destroy({ where: { id: orderId } });

    const shipment = await Shipment.findOne({ where: { orderId } });

    if (shipment) await Shipment.destroy({ where: { orderId } });

    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createOrder,
  updateOrder,
  removeOrder,
};
