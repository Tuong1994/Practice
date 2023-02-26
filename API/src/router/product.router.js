const express = require("express");
const {
  getList,
  getProductsByCategory,
  getProductsByProducer,
  getDetail,
  createProduct,
  updateProduct,
  removeProduct,
  searchProducts,
} = require("../controllers/product.controller");
const { ERole } = require("../enum/customer.enum");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/auth.middleware");
const { productUpload } = require("../middlewares/upload/product.upload");
const { Product } = require("../db/models");
const { checkId } = require("../middlewares/validate/validate.middle");
const productRouter = express.Router();

const roles = [ERole.admin];

productRouter.get("/list", getList);

productRouter.get("/productsByCategory", getProductsByCategory);

productRouter.get("/productsByProducer", getProductsByProducer);

productRouter.get("/detail", checkId(Product), getDetail);

productRouter.get("/search", searchProducts);

productRouter.post(
  "/create",
  productUpload(),
  authenticate,
  authorize(roles),
  createProduct
);

productRouter.put(
  "/update",
  productUpload(),
  authenticate,
  authorize(roles),
  checkId(Product),
  updateProduct
);

productRouter.delete(
  "/remove",
  authenticate,
  authorize(roles),
  checkId(Product),
  removeProduct
);

module.exports = {
  productRouter,
};
