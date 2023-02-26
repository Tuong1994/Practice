const express = require("express");
const {
  getList,
  getDetail,
  createCustomer,
  updateCustomer,
  removeCustomer,
} = require("../controllers/customer.controller");
const { checkId } = require("../middlewares/validate/validate.middle");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/auth.middleware");
const { Customer } = require("../db/models");
const { ERole } = require("../enum/customer.enum");
const customerRouter = express.Router();

const roles = [ERole.admin];

customerRouter.get("/list", getList);

customerRouter.get("/detail", checkId(Customer), getDetail);

customerRouter.post(
  "/create",
  authenticate,
  authorize(roles),
  createCustomer
);

customerRouter.put(
  "/update",
  authenticate,
  authorize(roles),
  checkId(Customer),
  updateCustomer
);

customerRouter.delete(
  "/remove",
  authenticate,
  authorize(roles),
  checkId(Customer),
  removeCustomer
);

module.exports = {
  customerRouter,
};
