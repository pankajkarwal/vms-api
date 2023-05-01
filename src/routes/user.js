import UserController from './../controllers/UserController';
const express = require('express')


const router = express.Router();
const userController = new UserController();

router.get('/fetch',userController.fetchUser)
router.post('/add', userController.saveUser)
router.put('/update',userController.updateUser)
router.get('/get/:id',userController.getUser)
router.delete('/delete/:id',userController.deleteUser)
router.post('/login',userController.loginUser)

module.exports = router;