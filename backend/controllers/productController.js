const Product = require('../models/Product');
const Store = require('../models/Store');
exports.addProduct = async (req, res) => {
  try {
    const { name, price, quantity, description, image } = req.body;
    if (!name || price == null) return res.status(400).json({ error: 'الاسم والسعر مطلوبين' });
    const store = await Store.findById(req.user.store); if(!store) return res.status(404).json({message:'Store not found'});
    const product = await Product.create({ store: store._id, name, price, quantity, description, image });
    store.products.push(product._id); await store.save(); res.status(201).json(product);
  } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.getStoreProducts = async (req, res) => { try{ const products = await Product.find({ store: req.user.store }); res.json(products);}catch(err){res.status(500).json({error:err.message})}};
exports.deleteProduct = async (req,res)=>{ try{ const product = await Product.findById(req.params.id); if(!product) return res.status(404).json({message:'Product not found'}); if(product.store.toString()!==req.user.store.toString()) return res.status(403).json({message:'Not allowed'}); await Product.findByIdAndDelete(product._id); res.json({message:'Deleted'})}catch(err){res.status(500).json({error:err.message})}};
