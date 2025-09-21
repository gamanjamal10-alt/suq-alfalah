const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
  role: {type:String, enum:['farmer','wholesaler','retailer','transporter']},
  store: {type:mongoose.Schema.Types.ObjectId, ref:'Store'}
},{timestamps:true});
module.exports = mongoose.model('User', userSchema);
