const { Product, Customer } = require("../db/models");
const utils = require("../utils");

const productImages = async (req, res) => {
  const { files } = req;
  const { productId } = req.query;

  try {
    const images = utils.getImage(files, "multiple");
    const product = await Product.findOne({ where: { id: productId } });
    product.images = images;
    await product.save();
    res.status(200).json({
      message: "Upload success",
      product,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const customerImage = async (req, res) => {
  const { file } = req;
  const { customerId } = req.query;

  try {
    const image = utils.getImage(file, "single");
    const customer = await Customer.findOne({ where: { id: customerId } });
    customer.avatar = image;
    await customer.save();
    res.status(200).json({
      message: "Upload success",
      customer,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  productImages,
  customerImage,
};
