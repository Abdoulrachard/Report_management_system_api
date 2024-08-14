const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCtrl');
const multer = require('../middlewares/multer-config')

router.post('',multer , userController.createUser);

router.get('', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.put('/:id/role', userController.updateUserRole);

router.delete('/:id', userController.deleteUser);

module.exports = router;
