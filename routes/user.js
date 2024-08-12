const express = require('express');
const router = express.Router();
const userController = require('../controllers/userCtrl');

router.post('/users', userController.createUser);

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.put('/users/:id', userController.updateUser);

router.put('/users/:id/role', userController.updateUserRole);

router.delete('/users/:id', userController.deleteUser);

module.exports = router;
