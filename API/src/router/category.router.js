const express = require("express");
const {
    getList,
    getDetail,
    createCategory,
    updateCategory,
    removeCategory,
  } = require("../controllers/category.controller");
  const { checkId } = require("../middlewares/validate/validate.middle");
  const {
    authenticate,
    authorize,
  } = require("../middlewares/auth/auth.middleware");
  const { Category } = require("../db/models");
  const { ERole } = require("../enum/customer.enum");
const categoryRouter = express.Router();

const roles = [ERole.admin]

categoryRouter.get("/list", getList);

categoryRouter.get("/detail", checkId(Category), getDetail);

categoryRouter.post(
  "/create",
  authenticate,
  authorize(roles),
  createCategory
);

categoryRouter.put(
  "/update",
  authenticate,
  authorize(roles),
  checkId(Category),
  updateCategory
);

categoryRouter.delete(
  "/remove",
  authenticate,
  authorize(roles),
  checkId(Category),
  removeCategory
);

module.exports = {
    categoryRouter,
}