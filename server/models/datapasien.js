'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataPasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DataPasien.init({
    UserId: DataTypes.INTEGER,
    no_rekam_medis: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    agama: DataTypes.STRING,
    kewarganegaraan: DataTypes.STRING,
    no_ktp: DataTypes.STRING,
    nama_ayah: DataTypes.STRING,
    nama_ibu: DataTypes.STRING,
    telepon: DataTypes.STRING,
    hp: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    status_perkawinan: DataTypes.STRING,
    pendidikan_pasien: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    poli_tujuan: DataTypes.STRING,
    dokter: DataTypes.STRING,
    status_pendaftaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataPasien',
  });

  DataPasien.addHook('beforeCreate', (instance, options) => {
    instance.status_pendaftaran = "Pending"
  })

  return DataPasien;
};