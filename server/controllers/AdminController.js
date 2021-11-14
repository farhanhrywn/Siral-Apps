const { Admin } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')


class Controller {
  static async loginAdmin(req, res, next) {
    try {
      let { nik, password } = req.body
      let findAdmin = await Admin.findOne({
        where: {
          nik
        }
      })

      if(findAdmin) {
        let checkPassword = comparePassword(password, findAdmin.password)
        if(checkPassword) {
          let { id, nama, jabatan } = findAdmin
          let generateToken = getToken({ id, nama, jabatan })
          res.status(200).json({ id, access_token: generateToken })
        }
        throw { name: "Wrong Data Admin" }
      }
      throw { name: "Wrong Data Admin" }
    } catch (error) {
      next(error)
    }
  }

  static async addAdmin(req, res, next) {
    try {
      const payload = {
          nama: req.body.nama,
          nik: req.body.nik,
          jabatan: req.body.jabatan,
          password: req.body.password
      }
      let newAdmin = await Admin.create(payload)
      res.status(201).json({id: newAdmin.id, nama: newAdmin.nama})
    } catch (error) {
        next(error)
    }
  }
}

module.exports = Controller