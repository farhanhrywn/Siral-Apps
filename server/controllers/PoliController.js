const { Poli } = require('../models')

class Controller {
    static async getListPoli(req, res, next) {
        try {
            let listPoli = await Poli.findAll()
            res.status(200).json(listPoli)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller