const express = require('express')

const router = express.Router();
import VisitorController from '../controllers/VisitorController';
const visitorController = new VisitorController();

router.get('/fetch',visitorController.fetchVisitor)
router.post('/add', visitorController.saveVisitor)
router.put('/update',visitorController.updateVisitor)
router.get('/get/:id',visitorController.getVisitor)
router.delete('/delete/:id',visitorController.deleteVisitor)

module.exports = router;