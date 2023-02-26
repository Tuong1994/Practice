const express = require("express");
const {
  getList,
  getDetail,
  createDistrict,
  updateDistrict,
  removeDistrict,
} = require("../controllers/district.controller");
const districtRouter = express.Router();

districtRouter.get("/list", getList);

districtRouter.get("/detail", getDetail);

districtRouter.post("/create", createDistrict);

districtRouter.put("/update", updateDistrict);

districtRouter.delete("/remove", removeDistrict);

module.exports = {
  districtRouter,
};
