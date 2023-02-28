const { Customer, Order } = require("../db/models");
const Sequelize = require("sequelize");
const utils = require("../utils");

const Op = Sequelize.Op;

const getList = async (req, res) => {
  const { page, limit, searchText } = req.query;

  try {
    const customers = await Customer.findAll();

    const newList = utils.paging(customers, page, limit);

    res.status(200).json(newList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { customerId } = req.query;

  try {
    const customer = await Customer.findOne({
      where: { id: customerId },
      attributes: [
        "id",
        "account",
        "firstName",
        "lastName",
        "fullName",
        "phone",
        "email",
        "gender",
        "address",
        "wardName",
        "wardCode",
        "districtName",
        "districtCode",
        "cityName",
        "cityCode",
        "birthday",

        "avatar",
      ],
      include: [{ model: Order, as: "orders" }],
    });

    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCustomer = async (req, res) => {
  const { file } = req;
  const {
    account,
    password,
    firstName,
    lastName,
    phone,
    email,
    address,
    wardName,
    wardCode,
    districtName,
    districtCode,
    cityName,
    cityCode,
    birthday,
  } = req.body;

  try {
    const hashPass = utils.hashPassword(password);
    const fullName = utils.getFullName(lastName, firstName);
    const image = utils.getImage(file, "single");
    const newCustomer = await Customer.create({
      id: `C-${utils.uuid()}`,
      account,
      password: hashPass,
      firstName,
      lastName,
      fullName: fullName,
      phone,
      email,
      address,
      wardName,
      wardCode,
      districtName,
      districtCode,
      cityName,
      cityCode,
      birthday,
      avatar: image,
    });
    res.status(200).json({
      message: "Create success",
      customer: newCustomer,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCustomer = async (req, res) => {
  const { file } = req;
  const { customerId } = req.query;
  const {
    account,
    password,
    firstName,
    lastName,
    phone,
    email,
    address,
    wardName,
    wardCode,
    districtName,
    districtCode,
    cityName,
    cityCode,
    birthday,
    avatar,
  } = req.body;

  try {
    const image = utils.getImage(file, "single", avatar);
    const fullName = utils.getFullName(lastName, firstName);
    await Customer.update(
      {
        account,
        password,
        firstName,
        lastName,
        fullName: fullName,
        phone,
        email,
        address,
        wardName,
        wardCode,
        districtName,
        districtCode,
        cityName,
        cityCode,
        birthday,
        avatar: image,
      },
      { where: { id: customerId } }
    );
    res.send(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCustomer = async (req, res) => {
  const { customerId } = req.query;

  try {
    const customer = await Customer.findOne({
      where: { id: customerId },
    });

    await Customer.destroy({
      where: { id: customerId },
    });
    // await utils.destroyFile(customer.avatar.path);
    res.status(200).send({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createCustomer,
  updateCustomer,
  removeCustomer,
};
