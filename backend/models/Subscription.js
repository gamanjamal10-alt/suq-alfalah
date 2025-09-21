const mongoose = require('mongoose');
const subscriptionSchema = new mongoose.Schema({
  store: {type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true, unique: true},
  startDate: {type: Date, default: Date.now},
  endDate: Date,
  paid: {type: Boolean, default: false},
  paymentMethod: {type: String, enum: ['baridimob','ccp', null], default: null},
  trial: {type: Boolean, default: true}
}, {timestamps: true});
module.exports = mongoose.model('Subscription', subscriptionSchema);
