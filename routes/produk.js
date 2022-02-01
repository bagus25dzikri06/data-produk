const router = require('express').Router()
const produkController = require('../controllers/produkController')

router.get('/', produkController.viewProduk)
router.post('/', produkController.addProduk)

module.exports = router