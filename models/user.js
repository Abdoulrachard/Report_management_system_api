const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  gender: String,
  role: { type: String, enum: ['admin', 'agent', 'probationer', 'user'] },
  status: String,
  phone: String,
});

module.exports = mongoose.model('User', userSchema);
