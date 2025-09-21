const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  buyer: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  products: [{product:{type:mongoose.Schema.Types.ObjectId, ref:'Product'}, quantity:Number}],
  total: Number,
  status: {type:String, enum:['pending','accepted','shipped','completed','canceled'], default:'pending'},
  paymentMethod: {type:String, enum:['baridimob','ccp']}
},{timestamps:true});
module.exports = mongoose.model('Order', orderSchema);
