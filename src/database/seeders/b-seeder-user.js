"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Admin",
          email: "admin@gmail.com",
          gender: 1,
          dob: "2002-08-29 14:58:58",
          password:
            "$2b$10$WM6ixYmN/5X.7jmQnGvrK.cT8toiU8jR.ohGJ7NwktFySpjE9gnQy",
          roleId: 1,
          createdAt: "2024-08-22 14:58:58",
          updatedAt: "2024-08-22 14:58:58",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
