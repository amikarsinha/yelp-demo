const express = require('express');
const router = express.Router();
const restaurantCategoryController = require('../controllers/restaurantCategoryController');

// Restaurant Category Routes
router.post('/restaurant-categories', restaurantCategoryController.createRestaurantCategory);
router.get('/restaurant-categories/:restaurantCategoryId', restaurantCategoryController.getRestaurantCategoryById);
router.put('/restaurant-categories/:restaurantCategoryId', restaurantCategoryController.updateRestaurantCategory);
router.delete('/restaurant-categories/:restaurantCategoryId', restaurantCategoryController.deleteRestaurantCategory);

module.exports = router;