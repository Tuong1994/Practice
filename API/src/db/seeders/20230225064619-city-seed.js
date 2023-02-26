"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          id: "HI",
          nameEng: "Ha Noi",
          nameVn: "Hà Nội",
          code: "HI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: "HC",
          nameEng: "Ho Chi Minh",
          nameVn: "Hồ Chí Minh",
          code: "HC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
