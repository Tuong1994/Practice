const express = require("express");
const { ERole } = require("../enum/customer.enum");
const { Shipment } = require("../db/models");
const {
  getList,
  getDetail,
  createShipment,
  updateShipment,
  removeShipment,
} = require("../controllers/shipment.controller");
const { checkId } = require("../middlewares/validate/validate.middle");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/auth.middleware");
const shipmentRouter = express.Router();

const roles = [ERole.admin];

shipmentRouter.get("/list", getList);

shipmentRouter.get("/detail", checkId(Shipment), getDetail);

shipmentRouter.post("/create", authenticate, authorize(roles), createShipment);

shipmentRouter.put(
  "/update",
  authenticate,
  authorize(roles),
  checkId(Shipment),
  updateShipment
);

shipmentRouter.delete(
  "/remove",
  authenticate,
  authorize(roles),
  checkId(Shipment),
  removeShipment
);

module.exports = {
  shipmentRouter,
};
