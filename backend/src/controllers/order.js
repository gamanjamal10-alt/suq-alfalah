const Order=require('../models/Order'); const Product=require('../models/Product');
exports.createOrder=async(req,res)=>{ try{ const {products,paymentMethod}=req.body; let total=0; for(const item of products){ const prod=await Product.findById(item.product); total+=prod.price*item.quantity; } const order=await Order.create({buyer:req.user._id,products,total,paymentMethod}); res.status(201).json(order);}catch(err){res.status(400).json({error:err.message});}};
exports.getMyOrders=async(req,res)=>{ const orders=await Order.find({buyer:req.user._id}); res.json(orders); };
