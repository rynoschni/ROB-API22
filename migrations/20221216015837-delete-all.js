'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable("Comments");
    await queryInterface.dropTable("Posts");
    await queryInterface.dropTable("Users");
  },
  async down(queryInterface, Sequelize) {
  
  }
};
