const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User Routes
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
