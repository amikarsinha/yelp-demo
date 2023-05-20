const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantCategorySchema = new Schema({
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
  });
  
  const Restaurant_Category = mongoose.model('Restaurant_Category', restaurantCategorySchema);
  module.exports = {Restaurant_Category};
  