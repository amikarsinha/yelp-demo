const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Category Routes
router.post('/categories', categoryController.createCategory);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.put('/categories/:categoryId', categoryController.updateCategory);
router.delete('/categories/:categoryId', categoryController.deleteCategory);

module.exports = router;