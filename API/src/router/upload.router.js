const express = require("express");
const { Product, Customer } = require("../db/models");
const {
  productImages,
  customerImage,
} = require("../controllers/upload.controller");
const { productUpload } = require("../middlewares/upload/product.upload");
const { checkId } = require("../middlewares/validate/validate.middle");
const { customerUpload } = require("../middlewares/upload/customer.upload");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/auth.middleware");
const { ERole } = require("../enum/customer.enum");
const uploadRouter = express.Router();

const roles = [ERole.admin];

uploadRouter.post(
  "/product",
  authenticate,
  authorize(roles),
  checkId(Product),
  productUpload(),
  productImages
);

uploadRouter.post(
  "/customer",
  authenticate,
  checkId(Customer),
  customerUpload(),
  customerImage
);

module.exports = {
  uploadRouter,
};
