'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shipments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      ordererName: {
        type: Sequelize.STRING
      },
      ordererPhone: {
        type: Sequelize.STRING
      },
      recieverName: {
        type: Sequelize.STRING
      },
      recieverPhone: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      products: {
        type: Sequelize.JSON
      },
      address: {
        type: Sequelize.STRING
      },
      cityName: {
        type: Sequelize.STRING
      },
      cityCode: {
        type: Sequelize.STRING
      },
      districtName: {
        type: Sequelize.STRING
      },
      districtCode: {
        type: Sequelize.STRING
      },
      wardName: {
        type: Sequelize.STRING
      },
      wardCode: {
        type: Sequelize.STRING
      },
      orderId: {
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
    await queryInterface.dropTable('Shipments');
  }
};