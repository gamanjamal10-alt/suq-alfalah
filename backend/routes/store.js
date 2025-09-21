const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const auth = require('../middleware/auth');
router.post('/', auth, storeController.createStore);
router.get('/', storeController.getStores);
router.get('/me', auth, storeController.getMyStore);
module.exports = router;
