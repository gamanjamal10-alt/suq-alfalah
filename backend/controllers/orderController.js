const Order = require('../models/Order');
const Product = require('../models/Product');
exports.createOrder = async (req, res) => {
  try {
    const { products, paymentMethod } = req.body;
    if (!products || products.length===0) return res.status(400).json({error:'الطلب فارغ'});
    let total=0;
    for(const item of products){ const prod = await Product.findById(item.product); if(!prod) return res.status(404).json({error:'منتج غير موجود'}); total+=prod.price*item.quantity; }
    const order = await Order.create({ buyer: req.user._id, products, total, paymentMethod });
    res.status(201).json(order);
  } catch(err){ res.status(500).json({error:err.message}); }
};
exports.getMyOrders = async (req,res)=>{ try{ const orders = await Order.find({buyer:req.user._id}).populate('products.product'); res.json(orders);}catch(err){res.status(500).json({error:err.message})}};
