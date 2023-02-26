const { Product, Spec } = require("../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const utils = require("../utils");

const getList = async (req, res) => {
  const {
    page,
    limit,
    isPaging,
    filter,
    searchText,
    sortBy,
    categoryId,
    producerId,
  } = req.query;

  try {
    let objFilter = {};

    if (categoryId) objFilter = { categoryId: categoryId };
    if (categoryId && producerId)
      objFilter = { categoryId: categoryId, producerId: producerId };

    const products = await Product.findAll({
      where: objFilter,
      include: [
        {
          model: Spec,
          as: "specs",
        },
      ],
    });

    const filterList = utils.filterAndSort(
      products,
      { filter, searchText, sortBy },
      {
        filterField: "categoryId",
        searchField: "name",
        createdField: "createdAt",
        priceField: "price",
      }
    );

    if (isPaging) {
      const newList = utils.paging(filterList, page, limit);
      res.status(200).send(newList);
    } else {
      res.status(200).send(products);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductsByCategory = async (req, res) => {
  const { categoryId, page, limit, searchText, sortBy } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        categoryId: categoryId,
      },
      include: [
        {
          model: Spec,
          as: "specs",
        },
      ],
    });

    const filterList = utils.filterAndSort(
      products,
      { searchText, sortBy },
      {
        searchField: "name",
        createdField: "createdAt",
        priceField: "price",
      }
    );

    const newList = utils.paging(filterList, page, limit);
    res.status(200).send(newList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductsByProducer = async (req, res) => {
  const { producerId, page, limit, searchText, sortBy } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        producerId: producerId,
      },
      include: [
        {
          model: Spec,
          as: "specs",
        },
      ],
    });

    const filterList = utils.filterAndSort(
      products,
      { searchText, sortBy },
      {
        searchField: "name",
        createdField: "createdAt",
        priceField: "price",
      }
    );

    const newList = utils.paging(filterList, page, limit);
    res.status(200).send(newList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { productId } = req.query;
  try {
    const product = await Product.findOne({
      where: {
        id: productId,
      },
      include: [
        {
          model: Spec,
          as: "specs",
        },
      ],
    });

    const point = utils.calRatePoints(product?.rates);

    const data = {
      ...product?.toJSON(),
      ratePoint: point,
    };

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const searchProducts = async (req, res) => {
  const { searchText } = req.query;

  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${searchText}%`,
        },
      },
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createProduct = async (req, res) => {
  const { files } = req;
  const {
    name,
    initialCapital,
    profitPercent,
    price,
    status,
    warranty,
    inventory,
    inventoryStatus,
    bestSale,
    outstand,
    categoryId,
    producerId,
    specs,
  } = req.body;

  try {
    const newImages = utils.getImage(files, "multiple");
    const newProduct = await Product.create({
      id: `P-${utils.uuid()}`,
      name,
      images: newImages,
      initialCapital,
      profitPercent,
      price,
      status,
      warranty,
      inventory,
      inventoryStatus,
      bestSale,
      outstand,
      categoryId,
      producerId,
    });

    if (newProduct) {
      if (specs) {
        const datas = JSON.parse(specs);
        const newSpecs = datas.map((d) => ({
          id: `SP-${utils.uuid()}`,
          title: d.title,
          content: d.content,
          productId: newProduct.id,
        }));
        await Spec.bulkCreate(newSpecs);
      }
      res.status(200).json({
        message: "Create success",
        product: newProduct,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  const { files } = req;
  const { productId } = req.query;
  const {
    name,
    initialCapital,
    profitPercent,
    price,
    status,
    warranty,
    inventory,
    inventoryStatus,
    bestSale,
    outstand,
    images,
    categoryId,
    producerId,
  } = req.body;

  try {
    const newImages = utils.getImage(files, "multiple", null, images);
    await Product.update(
      {
        name,
        initialCapital,
        profitPercent,
        price,
        status,
        warranty,
        inventory,
        inventoryStatus,
        bestSale,
        outstand,
        images: newImages,
        categoryId,
        producerId,
      },
      { where: { id: productId } }
    );
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeProduct = async (req, res) => {
  const { productId } = req.query;

  try {
    const product = Product.findOne({
      where: {
        id: productId,
      },
      include: [{ model: Spec, as: "specs" }],
    });

    if (product) {
      if (product.specs.length) {
        const specsId = product.specs.map((s) => s.id);
        await Spec.destroy({
          where: {
            id: specsId,
          },
        });
      }
    }

    await Product.destroy({
      where: {
        id: productId,
      },
    });
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getProductsByCategory,
  getProductsByProducer,
  getDetail,
  searchProducts,
  createProduct,
  updateProduct,
  removeProduct,
};
