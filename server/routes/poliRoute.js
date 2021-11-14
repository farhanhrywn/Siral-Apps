const router = require('express').Router()
const PoliController = require('../controllers/PoliController')
const errorHandler = require('../helpers/errorHandler')

router.get('/', PoliController.getListPoli, errorHandler)

module.exports = router