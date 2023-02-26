const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");
const { checkExist } = require("../middlewares/validate/validate.middle");
const authRouter = express.Router();

authRouter.post("/signIn", signIn);

authRouter.post("/signUp", checkExist, signUp);

module.exports = {
  authRouter,
};
