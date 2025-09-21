const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const auth = require('../middleware/auth');
router.post('/pay', auth, subscriptionController.paySubscription);
router.get('/me', auth, async (req,res)=>{ try{ const Store = require('../models/Store'); const store = await Store.findOne({owner:req.user._id}).populate('subscription'); if(!store) return res.status(404).json({message:'Store not found'}); res.json(store.subscription);}catch(err){res.status(500).json({error:err.message})} });
module.exports = router;
