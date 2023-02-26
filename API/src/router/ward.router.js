const express = require("express");
const {
  getList,
  getDetail,
  createWard,
  updateWard,
  removeWard,
} = require("../controllers/ward.controller");
const wardRouter = express.Router();

wardRouter.get("/list", getList);

wardRouter.get("/detail", getDetail);

wardRouter.post("/create", createWard);

wardRouter.put("/update", updateWard);

wardRouter.delete("/remove", removeWard);

module.exports = {
  wardRouter,
};
