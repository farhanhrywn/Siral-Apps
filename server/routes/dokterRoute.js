const router = require('express').Router()
const DokterController = require('../controllers/DokterController')
const errorHandler = require('../helpers/errorHandler')

router.get('/', DokterController.getListDokter, errorHandler)

module.exports = router