const { User, DataPasien } = require('../models')
const { comparePassword, hashPassword } = require('../helpers/bcrypt')
const { getToken } = require('../helpers/jwt')
const PDFDocument = require('pdfkit-table')
const fs = require('fs')

class Controller {
    static async registerPasien(req, res, next) {
        try {
            const payload = {
                email: req.body.email,
                password: req.body.password
            }
            const user = await User.create(payload)
            res.status(201).json({id: user.id, email: user.email})
        } catch (error) {
            next(error)
        }
    }

    static async loginPasien(req, res, next) {
        try {
            let { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if(user) {
                let result = comparePassword(password, user.password)
                if(!result) {
                    throw { name: "Wrong Data" }
                } else {
                    let { id, email } = user
                    const token = getToken({ id, email })
                    const userData = {
                        id,
                        access_token: token
                    }
                    res.status(200).json(userData)
                }
            } else {
                throw { name: "Wrong Data" }
            }
        } catch (error) {
            next(error)
        }
    }

    static async changePasswordPasien(req, res, next) {
        try {
            let { email, password } = req.body
            let user = await User.findOne({
                where: {
                    email
                }
            })
            if(user) {
                let hashedPassword = hashPassword(password)
                let changedPassword = await User.update({
                    password: hashedPassword
                },{
                    where: {
                        id: user.id
                    },
                    returning: true
                })
                res.status(200).json(changedPassword)
            } else {
                throw { name: 'Not Found' }
            }
        } catch (error) {
            next(error)
        }
    }

    static async changeStatusPasien(req, res, next) {
      try {
        let { id } = req.params
        let changedStatus = await DataPasien.update({
          status_pendaftaran: 'Approved'
        },{
          where: {
            id
          },
          returning: true
        })
        res.status(200).json(changedStatus)
      } catch (error) {
        next(error)
      }
    }

    static async getAllReportById(req, res, next) {
        try {
            let { userId } = req.query
            let listUserReport = await DataPasien.findAll({
                where: {
                    UserId: userId
                },
                order: [
                  ['createdAt', 'DESC']
                ]
            })
            if(listUserReport.length !== 0) {
                res.status(200).json(listUserReport)
            }
            throw { name: 'Not Found' }
        } catch (error) {
            next(error)
        }
    }

    static async getPasienById(req, res, next) {
      try {
        let { id } = req.params
        let detailPasien = await DataPasien.findOne({
          where: {
            id
          }
        })
        if(detailPasien) {
          res.status(200).json(detailPasien)
        }
        throw { name: 'Not Found'}
      } catch (error) {
        next(error)
      }
    }

    static async saveFormPasien(req, res, next) {
        try {
            const createForm = await DataPasien.create(req.body)
            res.status(201).json(createForm)
        } catch (error) {
            next(error)
        }
    }

    static async getAllPasien(req, res, next) {
      try {
        let listPasien = await DataPasien.findAll({
          order: [
            ['createdAt', 'DESC']
          ]
        })
        res.status(200).json(listPasien)
      } catch (error) {
        next(error)
      }
    }

    static async generatePdf(req, res, next) {
      try {
        let { date, dataReport } = req.body

        const isDateRangeEmpty = (date) => {
          let arrOfValuesForm = Object.values(date)
          let isValueEmpty = arrOfValuesForm.some(val => val === '' || val === undefined)
          if(isValueEmpty) {
            return true
          }
          return false
        }

        let pdfDoc = new PDFDocument({
          margins: {
            top: 50,
            left: 20,
            right: 20
          },
          size: 'A4'
        });

        // Set name for PDF Document
        pdfDoc.pipe(fs.createWriteStream(`reports/report-${ isDateRangeEmpty(date) ? 'All' : date.start_date === date.end_date ? date.start_date : date.start_date + "-" + date.end_date }.pdf`));

        let table = {
          width: 500,
          headers: [
            { label: "No", property: 'no_rekam_medis', width: 50, renderer: null },
            { label: "Name", property: 'name', width: 100, renderer: null },
            { label: "Poli", property: 'poli_tujuan', width: 50, renderer: null },
            { label: "Dokter", property: 'dokter', width: 50, renderer: null },
            { label: "Nomor Telepon", property: 'hp', width: 100, renderer: null },
            { label: "Email", property: 'email', width: 150, renderer: null },
            { label: "Status", property: 'status_pendaftaran', width: 50, renderer: null }
          ],
          datas: dataReport
        }

        // Set title inside PDF Documnet
        pdfDoc.text(`Report Pasien Rawat Jalan RS Karunia Kasih - ${ isDateRangeEmpty(date) ? 'All' : date.start_date === date.end_date ? date.start_date : date.start_date + "-" + date.end_date }`, {
          align: 'center'
        })

        pdfDoc.moveDown()

        // Create table in PDF Document
        pdfDoc.table(table)
        await pdfDoc.end();
        res.status(201).json({ success: true })
      } catch (error) {
        next(error)
      }
    }

    static async downloadPdf(req, res, next) {
      try {
        let date = {
          start_date: req.query.start_date,
          end_date: req.query.end_date
        }

        const isDateRangeEmpty = (date) => {
          let arrOfValuesForm = Object.values(date)
          let isValueEmpty = arrOfValuesForm.some(val => val === '' || val === undefined)
          if(isValueEmpty) {
            return true
          }
          return false
        }

        res.download(`reports/report-${ isDateRangeEmpty(date) ? 'All' : date.start_date === date.end_date ? date.start_date : date.start_date + "-" + date.end_date }.pdf`)
      } catch (error) {
        next(error)
      }
    }
}

module.exports = Controller