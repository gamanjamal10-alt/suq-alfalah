const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  store: {type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true},
  name: {type: String, required: true},
  price: {type: Number, required: true, min:0},
  quantity: {type: Number, required: true, min:0, default:0},
  description: String,
  image: String,
  isActive: {type: Boolean, default: true}
}, {timestamps: true});
productSchema.index({name: 'text', description: 'text'});
module.exports = mongoose.model('Product', productSchema);
