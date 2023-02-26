const express = require("express");
const {
  getList,
  getDetail,
  createCity,
  updateCity,
  removeCity,
} = require("../controllers/city.controller");
const cityRouter = express.Router();

cityRouter.get("/list", getList);

cityRouter.get("/detail", getDetail);

cityRouter.post("/create", createCity);

cityRouter.put("/update", updateCity);

cityRouter.delete("/remove", removeCity);

module.exports = {
  cityRouter,
};
