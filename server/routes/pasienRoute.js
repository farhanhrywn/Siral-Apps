const router = require('express').Router()
const UserController = require('../controllers/PasienController')
const errorHandler = require('../helpers/errorHandler')

router.post('/register', UserController.registerPasien, errorHandler)
router.post('/login', UserController.loginPasien, errorHandler)
router.patch('/verify', UserController.changePasswordPasien, errorHandler)
router.get('/report', UserController.getAllReportById, errorHandler)
router.get('/download-pdf', UserController.downloadPdf, errorHandler)
router.post('/generate-pdf', UserController.generatePdf, errorHandler)
router.get('/date', UserController.getPasienByBirthDate, errorHandler)
router.get('/:id', UserController.getPasienById, errorHandler)
router.patch('/status/:id', UserController.changeStatusPasien, errorHandler)
router.get('/', UserController.getAllPasien, errorHandler)
router.post('/', UserController.saveFormPasien, errorHandler)


module.exports = router