'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Wards', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nameEng: {
        type: Sequelize.STRING
      },
      nameVn: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      districtCode: {
        type: Sequelize.STRING
      },
      districtId: {
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
    await queryInterface.dropTable('Wards');
  }
};