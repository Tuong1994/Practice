const { Comment } = require("../db/models");
const utils = require("../utils");

const getList = async (req, res) => {
  const { productId, customerId, page, limit } = req.query;

  try {
    let comments = [];
    if (productId) comments = await Comment.findAll({ where: { productId } });
    else if (customerId)
      comments = await Comment.findAll({ where: { customerId } });
    else comments = await Comment.findAll();

    const newList = utils.paging(comments, page, limit);

    res.status(200).send(newList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  const { commentId } = req.query;
  try {
    const comment = await Comment.findOne({ where: { id: commentId } });
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createComment = async (req, res) => {
  const {
    commentText,
    customerId,
    customerName,
    customerAvatar,
    productId,
    productName,
    parentId,
  } = req.body;
  try {
    const newComment = await Comment.create({
      id: `CO-${utils.uuid()}`,
      commentText,
      customerId,
      customerName,
      customerAvatar,
      productId,
      productName,
      parentId,
    });
    res.status(200).json({
      message: "Create success",
      comment: newComment,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateComment = async (req, res) => {
  const { commentId } = req.query;
  const {
    commentText,
    customerId,
    customerName,
    customerAvatar,
    productId,
    productName,
    parentId,
  } = req.body;
  try {
    await Comment.update(
      {
        commentText,
        customerId,
        customerName,
        customerAvatar,
        productId,
        productName,
        parentId,
      },
      { where: { id: commentId } }
    );
    res.status(200).json({ message: "Update success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeComment = async (req, res) => {
  const { commentId } = req.query;

  try {
    await Comment.destroy({ where: { id: commentId } });
    const childComments = await Comment.findAll({
      where: { parentId: commentId },
    });
    if (childComments) {
      const ids = childComments.map((c) => c.id);
      if (ids) await Comment.destroy({ where: { id: ids } });
      return res.status(200).json({ message: "Remove success" });
    }
    res.status(200).json({ message: "Remove success" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getList,
  getDetail,
  createComment,
  updateComment,
  removeComment,
};
