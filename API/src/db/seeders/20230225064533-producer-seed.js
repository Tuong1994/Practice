'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
      "Producers",
      [
        {
          id: "asus",
          name: "ASUS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "asrock",
          name: "ASROCK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "gigabyte",
          name: "GIGABYTE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "msi",
          name: "MSI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "intel",
          name: "INTEL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "amd",
          name: "AMD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "seagate",
          name: "SEAGATE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "western",
          name: "WESTERN DIGITAL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "kingston",
          name: "KINGSTON",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "corsair",
          name: "CORSAIR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "deepcool",
          name: "DEEPCOOL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "coolermaster",
          name: "COOLERMASTER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "dell",
          name: "DELL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "hp",
          name: "HP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "samsung",
          name: "SAMSUNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "lg",
          name: "LG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "viewsonic",
          name: "VIEWSONIC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "zg_01",
          name: "ZG tier 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "zg_02",
          name: "ZG tier 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "zg_03",
          name: "ZG tier 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "zg_04",
          name: "ZG tier 4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Producers', null, {})
  }
};
