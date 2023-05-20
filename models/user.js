const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  otherFields: { type: Schema.Types.Mixed }
});

const User = mongoose.model('User', userSchema);
module.exports =  {User};