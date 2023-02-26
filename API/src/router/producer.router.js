const express = require("express");
const {
    getList,
    getDetail,
    createProducer,
    updateProducer,
    removeProducer,
  } = require("../controllers/producer.controller");
  const { checkId } = require("../middlewares/validate/validate.middle");
  const {
    authenticate,
    authorize,
  } = require("../middlewares/auth/auth.middleware");
  const { Producer } = require("../db/models");
  const { ERole } = require("../enum/customer.enum");
const producerRouter = express.Router();

const roles = [ERole.admin]

producerRouter.get("/list", getList);

producerRouter.get("/detail", checkId(Producer), getDetail);

producerRouter.post(
  "/create",
  authenticate,
  authorize(roles),
  createProducer
);

producerRouter.put(
  "/update",
  authenticate,
  authorize(roles),
  checkId(Producer),
  updateProducer
);

producerRouter.delete(
  "/remove",
  authenticate,
  authorize(roles),
  checkId(Producer),
  removeProducer
);

module.exports = {
    producerRouter,
}