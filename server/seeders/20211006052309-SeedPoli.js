'use strict';
const data = [
  {
    name: "Poli Gigi",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Poli Anak",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Poli Umum",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Polis', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Polis', null, {})
  }
};
