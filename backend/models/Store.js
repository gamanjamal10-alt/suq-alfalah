const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  name: {type: String, required: true},
  products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
  subscription: {type: mongoose.Schema.Types.ObjectId, ref: 'Subscription'},
  active: {type: Boolean, default: true}
}, {timestamps: true});
module.exports = mongoose.model('Store', storeSchema);
