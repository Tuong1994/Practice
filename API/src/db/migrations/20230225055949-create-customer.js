"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Customers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      account: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      cityCode: {
        type: Sequelize.STRING,
      },
      cityName: {
        type: Sequelize.STRING,
      },
      districtCode: {
        type: Sequelize.STRING,
      },
      districtName: {
        type: Sequelize.STRING,
      },
      wardCode: {
        type: Sequelize.STRING,
      },
      wardName: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.INTEGER,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      avatar: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Customers");
  },
};
