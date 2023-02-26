const express = require("express");
const {
  getList,
  getDetail,
  createSpec,
  updateSpec,
  removeSpec,
} = require("../controllers/spec.controller");
const { checkId } = require("../middlewares/validate/validate.middle");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/auth.middleware");
const { Spec } = require("../db/models");
const { ERole } = require("../enum/customer.enum");
const specRouter = express.Router();

const roles = [ERole.admin];

specRouter.get("/list", getList);

specRouter.get("/detail", checkId(Spec), getDetail);

specRouter.post("/create", authenticate, authorize(roles), createSpec);

specRouter.put(
  "/update",
  authenticate,
  authorize(roles),
  checkId(Spec),
  updateSpec
);

specRouter.delete(
  "/remove",
  authenticate,
  authorize(roles),
  checkId(Spec),
  removeSpec
);

module.exports = {
  specRouter,
};
