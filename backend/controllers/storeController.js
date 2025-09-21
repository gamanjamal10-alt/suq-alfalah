const Store = require('../models/Store');
const Subscription = require('../models/Subscription');
exports.createStore = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'اسم المتجر مطلوب' });
    const existing = await Store.findOne({ owner: req.user._id });
    if (existing) return res.status(400).json({ error: 'لديك متجر بالفعل' });
    const store = await Store.create({ owner: req.user._id, name });
    const now = new Date();
    const trialEnd = new Date(now); trialEnd.setMonth(trialEnd.getMonth()+1);
    const subscription = await Subscription.create({ store: store._id, startDate: now, endDate: trialEnd, trial: true, paid: false });
    store.subscription = subscription._id; await store.save();
    req.user.store = store._id; await req.user.save();
    res.status(201).json(store);
  } catch (err) { res.status(500).json({ error: err.message }); }
};
exports.getStores = async (req, res) => {
  try { const stores = await Store.find().populate('owner','name email'); res.json(stores); } catch(err){ res.status(500).json({error:err.message}); }
};
exports.getMyStore = async (req,res)=>{ try{ const store = await Store.findOne({ owner: req.user._id }).populate('products subscription'); if(!store) return res.status(404).json({message:'لم يتم العثور على متجر'}); res.json(store);}catch(err){res.status(500).json({error:err.message})}};
