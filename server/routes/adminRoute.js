const router = require('express').Router()
const AdminController = require('../controllers/AdminController')
const errorHandler = require('../helpers/errorHandler')

router.post('/login', AdminController.loginAdmin, errorHandler)
router.post('/', AdminController.addAdmin, errorHandler)

module.exports = router