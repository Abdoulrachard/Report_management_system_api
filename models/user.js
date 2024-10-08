const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
  firstname: {type: String, required: true},
  lastname: {type:String, required: true},
  email: {type:String, required: true , unique: true},
  password: {type:String, required: true},
  gender: String,
  role: { type: String, required : true , enum: ['admin', 'agent', 'probationer', 'user'] },
  status: {type : String, enum:['actif' , 'inactif'] , required: true} ,
  phone: {type :String , required: true },
  profil: {type :String },
});
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema);
