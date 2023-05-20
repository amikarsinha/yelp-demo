const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');


// Review Routes
router.post('/reviews', reviewController.createReview);
router.get('/reviews/:reviewId', reviewController.getReviewById);
router.put('/reviews/:reviewId', reviewController.updateReview);
router.delete('/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;