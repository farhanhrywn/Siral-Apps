const router = require('express').Router()
const UserController = require('../controllers/PasienController')
const errorHandler = require('../helpers/errorHandler')

router.post('/register', UserController.registerPasien, errorHandler)
router.post('/login', UserController.loginPasien, errorHandler)
router.patch('/verify', UserController.changePasswordPasien, errorHandler)
router.get('/report', UserController.getAllReportById, errorHandler)
router.get('/download-pdf', UserController.downloadPdf, errorHandler)
router.post('/generate-pdf', UserController.generatePdf, errorHandler)
router.get('/:id', UserController.getPasienById, errorHandler)
router.get('/', UserController.getAllPasien, errorHandler)
router.post('/', UserController.saveFormPasien, errorHandler)

router.patch('/status/:id', UserController.changeStatusPasien, errorHandler)

module.exports = router