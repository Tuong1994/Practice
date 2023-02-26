'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.JSON
      },
      newImages: {
        type: Sequelize.JSON
      },
      initialCapital: {
        type: Sequelize.INTEGER
      },
      profitPercent: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      warranty: {
        type: Sequelize.INTEGER
      },
      inventory: {
        type: Sequelize.INTEGER
      },
      inventoryStatus: {
        type: Sequelize.INTEGER
      },
      bestSale: {
        type: Sequelize.BOOLEAN
      },
      outstand: {
        type: Sequelize.BOOLEAN
      },
      categoryId: {
        type: Sequelize.STRING
      },
      producerId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};