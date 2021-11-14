const { Dokter } = require('../models')

class Controller {
    static async getListDokter(req, res, next) {
        try {
            let listDokter = await Dokter.findAll()
            res.status(200).json(listDokter)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller