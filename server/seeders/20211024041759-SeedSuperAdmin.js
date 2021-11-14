'use strict';
const { hashPassword } = require('../helpers/bcrypt')
const data = [
  {
    nama: 'Farhan Haryawan',
    nik: '1234567890',
    jabatan: 'koordinator',
    password: hashPassword('123456'),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admins', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {})
  }
};
