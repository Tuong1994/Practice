const express = require("express");
const { customerRouter } = require("./customer.router");
const { categoryRouter } = require("./category.router");
const { producerRouter } = require("./producer.router");
const { productRouter } = require("./product.router");
const { specRouter } = require("./spec.router");
const { authRouter } = require("./auth.router");
const { cityRouter } = require("./city.router");
const { districtRouter } = require("./district.router");
const { wardRouter } = require("./ward.router");
const { orderRouter } = require("./order.router");
const { shipmentRouter } = require("./shipment.router");
const { uploadRouter } = require("./upload.router");
const rootRouter = express.Router();

rootRouter.use("/customer", customerRouter);
rootRouter.use("/category", categoryRouter);
rootRouter.use("/producer", producerRouter);
rootRouter.use("/product", productRouter);
rootRouter.use("/spec", specRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/city", cityRouter);
rootRouter.use("/district", districtRouter);
rootRouter.use("/ward", wardRouter);
rootRouter.use("/order", orderRouter);
rootRouter.use("/shipment", shipmentRouter);
rootRouter.use("/upload", uploadRouter);

module.exports = {
  rootRouter,
};
