const { Shipment } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  const { page, limit } = req.query;

  try {
    const shipments = await Shipment.findAll();
    const newList = utils.paging(shipments, page, limit);
    res.status(200).send(newList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { shipmentId } = req.query;

  try {
    const shipment = await Shipment.findOne({ where: { id: shipmentId } });
    res.status(200).send(shipment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createShipment = async (req, res) => {
  const {
    status,
    ordererName,
    ordererPhone,
    recieverName,
    recieverPhone,
    products,
    address,
    cityName,
    cityCode,
    districtName,
    districtCode,
    wardName,
    wardCode,
    orderId,
  } = req.body;

  try {
    const newShipment = await Shipment.create({
      id: `SH-${utils.uuid()}`,
      status,
      ordererName,
      ordererPhone,
      recieverName,
      recieverPhone,
      products,
      address,
      cityName,
      cityCode,
      districtName,
      districtCode,
      wardName,
      wardCode,
      orderId,
    });
    res.status(200).json({
      message: "Create success",
      shipment: newShipment,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateShipment = async (req, res) => {
  const { shipmentId } = req.query;
  const {
    status,
    ordererName,
    ordererPhone,
    recieverName,
    recieverPhone,
    products,
    address,
    cityName,
    cityCode,
    districtName,
    districtCode,
    wardName,
    wardCode,
    orderId,
  } = req.body;

  try {
    await Shipment.update(
      {
        status,
        ordererName,
        ordererPhone,
        recieverName,
        recieverPhone,
        products,
        address,
        cityName,
        cityCode,
        districtName,
        districtCode,
        wardName,
        wardCode,
        orderId,
      },
      { where: { id: shipmentId } }
    );
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeShipment = async (req, res) => {
  const { shipmentId } = req.query;

  try {
    await Shipment.destroy({ where: { id: shipmentId } });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createShipment,
  updateShipment,
  removeShipment,
};
