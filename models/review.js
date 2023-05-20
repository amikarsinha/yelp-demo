const mongoose = require('mongoose');
const { Schema } = mongoose;


const reviewSchema = new Schema({
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    otherFields: { type: Schema.Types.Mixed }
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  module.exports = {Review};
  