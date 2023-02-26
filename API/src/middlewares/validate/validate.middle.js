const { Customer } = require("../../db/models");

const checkId = (model) => async (req, res, next) => {
  const {
    customerId,
    categoryId,
    producerId,
    productId,
    specId,
    orderId,
    shipmentId,
  } = req.query;
  try {
    const result = await model.findOne({
      where: {
        id:
          customerId ||
          categoryId ||
          producerId ||
          productId ||
          specId ||
          orderId ||
          shipmentId,
      },
    });
    if (result) return next();
    res.status(404).json({ message: "Id Not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkExist = async (req, res, next) => {
  const { account } = req.body;
  try {
    const isExist = await Customer.findOne({ where: { account: account } });
    if (!isExist) return next();
    res.status(409).json({ message: "Account is already exist" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkId,
  checkExist,
};
