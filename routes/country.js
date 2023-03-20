import CountryController from '../controllers/CountryController';
const express = require('express')


const router = express.Router();
const visitorController = new CountryController();

router.get('/fetch',visitorController.fetchCountry)
router.post('/add', visitorController.saveCountry)
router.put('/update',visitorController.updateCountry)
router.get('/get/:id',visitorController.getCountry)
router.delete('/delete/:id',visitorController.deleteCountry)

module.exports = router;