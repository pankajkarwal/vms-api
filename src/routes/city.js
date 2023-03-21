import CityController from '../controllers/CityController';
const express = require('express')


const router = express.Router();
const cityController = new CityController();

router.get('/fetch',cityController.fetchCity)
router.post('/add', cityController.saveCity)
router.put('/update',cityController.updateCity)
router.get('/get/:id',cityController.getCity)
router.delete('/delete/:id',cityController.deleteCity)

module.exports = router;