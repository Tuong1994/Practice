const { Customer } = require("../db/models");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const utils = require("../utils");

dotenv.config();

const signIn = async (req, res) => {
  const { account, password } = req.body;
  try {
    const customerLogin = await Customer.findOne({
      where: { account: account },
    });
    if (customerLogin) {
      const isAuth = bcryptjs.compareSync(password, customerLogin.password);
      if (isAuth) {
        const key = process.env.KEY;
        const payload = {
          id: customerLogin.id,
          account: customerLogin.account,
          firstName: customerLogin.firstName,
          lastName: customerLogin.lastName,
          fullName: customerLogin.fullName,
          email: customerLogin.email,
          phone: customerLogin.phone,
          birthday: customerLogin.birthday,
          address: customerLogin.address,
          wardCode: customerLogin.wardCode,
          wardName: customerLogin.wardName,
          districtCode: customerLogin.districtCode,
          districtName: customerLogin.districtName,
          cityCode: customerLogin.cityCode,
          cityName: customerLogin.cityName,
          avatar: customerLogin.avatar,
        };
        const token = jwt.sign(payload, key, { expiresIn: 30 * 24 * 60 * 60 });
        res.status(200).json({
          message: "Sign in success",
          token,
          customer: payload,
        });
      } else {
        res.status(403).send("Password is not correct");
      }
    } else {
      res.status(404).send("Account is not correct");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  const {
    account,
    password,
    firstName,
    lastName,
    phone,
    email,
    birthday,
    address,
    wardCode,
    wardName,
    districtCode,
    districtName,
    cityCode,
    cityName,
  } = req.body;

  try {
    const hashPass = utils.hashPassword(password);
    const fullName = utils.getFullName(lastName, firstName);
    const newCustomer = await Customer.create({
      id: `C-${utils.uuid()}`,
      account,
      password: hashPass,
      firstName,
      lastName,
      fullName: fullName,
      phone,
      email,
      birthday,
      address,
      wardCode,
      wardName,
      districtCode,
      districtName,
      cityCode,
      cityName,
      avatar: null,
    });

    res.status(200).json({
      message: "Sign up success",
      customer: newCustomer,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signIn,
  signUp,
};
