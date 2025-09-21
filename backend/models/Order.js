const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  products: [{ product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true}, quantity: {type: Number, required: true, min:1} }],
  total: {type: Number, required: true, min:0},
  status: {type: String, enum: ['pending','accepted','shipped','completed','canceled'], default: 'pending'},
  paymentMethod: {type: String, enum: ['baridimob','ccp','cash'], required: true}
}, {timestamps: true});
module.exports = mongoose.model('Order', orderSchema);
