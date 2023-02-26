"use strict";

const { EGender } = require("../../enum/customer.enum");
const utils = require("../../utils");

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
    const firstNames = [
      "Jack",
      "Williams",
      "Jason",
      "Barry",
      "Ken",
      "Kevin",
      "Issac",
      "Leon",
      "Bruce",
      "Clark",
      "Tony",
      "Clint",
      "Steve",
      "John",
      "Chris",
      "Lisa",
      "Anabelle",
      "Elizabeh",
      "Anna",
      "Hannah",
      "Sarah",
      "Tiffany",
      "Christine",
      "Martha",
      "Jill",
      "Claire",
      "Ada",
      "Michelle",
    ];

    const lastNames = [
      "Johnson",
      "McCoy",
      "Baker",
      "Wayne",
      "Kent",
      "Barton",
      "Warren",
      "Washington",
      "Kenway",
      "Franklin",
      "Olsen",
      "Swan",
      "Turner",
      "Jones",
      "Weasley",
      "Granger",
      "Potter",
      "Nigma",
      "Cobblepot",
      "Stewart",
      "Jordan",
      "Allen",
      "West",
      "Grayson",
      "Todd",
      "Drake",
      "Kane",
      "Gordon",
    ];

    const customers = [
      {
        id: `C-${utils.uuid()}`,
        account: "kevin1994",
        password: utils.hashPassword("prophet@456"),
        firstName: "Kevin",
        lastName: "Todd",
        fullName: "Kevin Todd",
        phone: "0793229954",
        email: "kevin1994@gmail.com",
        gender: EGender.male,
        address: "79/24/13 Âu Cơ",
        wardName: "Phường 14",
        wardCode: "27214",
        districtName: "Quận 11",
        districtCode: "HC476",
        cityName: "Hồ Chí Minh",
        cityCode: "HC",
        birthday: "1994-11-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    for (let idx = 0; idx < 50; idx++) {
      const newCusomter = {
        id: `C-${utils.uuid()}`,
        account: `account-${idx + 1}`,
        password: utils.hashPassword(`account-${idx + 1}`),
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
        fullName: "",
        phone: "",
        email: `${
          firstNames[Math.floor(Math.random() * firstNames.length)]
        }@gmail.com`,
        gender: 0,
        address: "",
        wardName: "",
        wardCode: "",
        districtName: "",
        districtCode: "",
        cityName: "",
        cityCode: "",
        birthday: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      customers.push(newCusomter);
    }

    await queryInterface.bulkInsert("Customers", customers, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
