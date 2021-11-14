'use strict';

const data = [
  {
    UserId: 12,
    name: 'Farhan',
    gender: 'Male',
    tempat_lahir: 'Bekasi',
    tanggal_lahir: '22-09-1997',
    agama: 'Islam',
    kewarganegaraan: 'WNI',
    no_ktp: '123456789',
    nama_ayah: 'Jamal',
    nama_ibu: 'Ani',
    telepon: '021123',
    hp: '081180',
    email: 'farhan@gmail.com',
    alamat: 'Tambun',
    provinsi: 'Jawa Barat',
    kabupaten: 'Bekasi',
    kecamatan: 'tambun utara',
    kelurahan: 'karang satria',
    status_perkawinan: 'belum menikah',
    pendidikan_pasien: 'SMK',
    pekerjaan: 'Karyawan swasta',
    poli_tujuan: 'Poli Gigi',
    dokter: 'Dr. Arpin',
    status_pendaftaran: 'Pending',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('DataPasiens', data)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DataPasiens', null, {})
  }
};
