const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
router.post('/', auth, productController.addProduct);
router.get('/my', auth, productController.getStoreProducts);
router.delete('/:id', auth, productController.deleteProduct);
module.exports = router;
