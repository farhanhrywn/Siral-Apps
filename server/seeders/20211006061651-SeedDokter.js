'use strict';
const data = [
  {
    name: 'Dr. Arpin',
    jam_praktek: '09:00 - 15:00',
    poli: "Poli Gigi",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Fadila',
    jam_praktek: '13:00 - 18:00',
    poli: "Poli Gigi",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Chiesa',
    jam_praktek: '18:00 - 22:00',
    poli: "Poli Gigi",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Muhammad',
    jam_praktek: '09:00 - 15:00',
    poli: "Poli Anak",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Tesar',
    jam_praktek: '13:00 - 18:00',
    poli: "Poli Anak",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Radiputro',
    jam_praktek: '18:00 - 22:00',
    poli: "Poli Anak",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Majid',
    jam_praktek: '09:00 - 15:00',
    poli: "Poli Umum",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Hafizh',
    jam_praktek: '13:00 - 18:00',
    poli: "Poli Umum",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dr. Abdullah',
    jam_praktek: '18:00 - 22:00',
    poli: "Poli Umum",
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Dokters', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dokters', null, {})
  }
};
