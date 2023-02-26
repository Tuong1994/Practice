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
      "Category_Producers",
      [
        //CPU
        {
          id: 1,
          categoryId: "cpu",
          producerId: "intel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          categoryId: "cpu",
          producerId: "amd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // MAINBOARD
        {
          id: 3,
          categoryId: "mainboard",
          producerId: "asus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          categoryId: "mainboard",
          producerId: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          categoryId: "mainboard",
          producerId: "msi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          categoryId: "mainboard",
          producerId: "asrock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //RAM
        {
          id: 7,
          categoryId: "ram",
          producerId: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          categoryId: "ram",
          producerId: "corsair",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          categoryId: "ram",
          producerId: "kingston",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // HDD
        {
          id: 10,
          categoryId: "hdd",
          producerId: "seagate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          categoryId: "hdd",
          producerId: "western",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // SSD
        {
          id: 12,
          categoryId: "ssd",
          producerId: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          categoryId: "ssd",
          producerId: "samsung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          categoryId: "ssd",
          producerId: "kingston",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          categoryId: "ssd",
          producerId: "western",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // VGA
        {
          id: 16,
          categoryId: "vga",
          producerId: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          categoryId: "vga",
          producerId: "asus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          categoryId: "vga",
          producerId: "msi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // PSU
        {
          id: 19,
          categoryId: "psu",
          producerId: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          categoryId: "psu",
          producerId: "deepcool",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          categoryId: "psu",
          producerId: "coolermaster",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          categoryId: "psu",
          producerId: "corsair",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // MONITOR
        {
          id: 23,
          categoryId: "monitor",
          producerId: "samsung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          categoryId: "monitor",
          producerId: "lg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          categoryId: "monitor",
          producerId: "viewsonic",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // LAPTOP
        {
          id: 26,
          categoryId: "laptop",
          producerId: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          categoryId: "laptop",
          producerId: "asus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          categoryId: "laptop",
          producerId: "msi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 29,
          categoryId: "laptop",
          producerId: "dell",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          categoryId: "laptop",
          producerId: "hp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // PC SET
        {
          id: 31,
          categoryId: "pc_set",
          producerId: "zg_01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          categoryId: "pc_set",
          producerId: "zg_02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          categoryId: "pc_set",
          producerId: "zg_03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          categoryId: "pc_set",
          producerId: "zg_04",
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
    await queryInterface.bulkDelete("Category_Producers", null, {});
  },
};
