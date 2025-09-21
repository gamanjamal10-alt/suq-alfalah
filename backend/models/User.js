const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, unique: true, required: true, lowercase: true, trim: true},
  password: {type: String, required: true},
  role: {type: String, enum: ['farmer','wholesaler','retailer','transporter'], default: 'farmer'},
  store: {type: mongoose.Schema.Types.ObjectId, ref: 'Store', default: null}
}, {timestamps: true});
module.exports = mongoose.model('User', userSchema);
