const express = require("express");
const { ERole } = require("../enum/customer.enum");
const { Order } = require("../db/models");
const {
  getList,
  getDetail,
  createOrder,
  updateOrder,
  removeOrder,
} = require("../controllers/order.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/auth.middleware");
const { checkId } = require("../middlewares/validate/validate.middle");
const orderRouter = express.Router();

const roles = [ERole.admin];

orderRouter.get("/list", getList);

orderRouter.get("/detail", checkId(Order), getDetail);

orderRouter.post("/create", createOrder);

orderRouter.put(
  "/update",
  authenticate,
  authorize(roles),
  checkId(Order),
  updateOrder
);

orderRouter.delete(
  "/remove",
  authenticate,
  authorize(roles),
  checkId(Order),
  removeOrder
);

module.exports = {
  orderRouter,
};
