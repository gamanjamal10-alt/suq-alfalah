const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  store: {type:mongoose.Schema.Types.ObjectId, ref:'Store', required:true},
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  image: String
},{timestamps:true});
module.exports = mongoose.model('Product', productSchema);
