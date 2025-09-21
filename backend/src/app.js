const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user');
const storeRoutes = require('./routes/store');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const subscriptionRoutes = require('./routes/subscription');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

app.get('/health', (req, res) => res.json({status:'ok', time: new Date().toISOString()}));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/suq-alfalah';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('Server running on port', PORT)))
  .catch(err => console.error('MongoDB connection error:', err));
