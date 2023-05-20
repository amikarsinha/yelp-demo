const mongoose = require('mongoose');
const { Schema } = mongoose;


const restaurantSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    openingHours: { type: Schema.Types.Mixed },
    otherFields: { type: Schema.Types.Mixed }
  });
  
  const Restaurant = mongoose.model('Restaurant', restaurantSchema);
  module.exports = {Restaurant};
  