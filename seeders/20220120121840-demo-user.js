'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert ( 'Users', [
      {
      name: 'John',
      email: 'example@example.com',
      password:'123456',
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Mario',
      email: 'mario@example.com',
      password:'123456',
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Jesus',
      email: 'jesus@example.com',
      password:'123456',
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
