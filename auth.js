const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../models");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "لا يوجد توكن" });
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(payload.id);
    if (!user) return res.status(401).json({ message: "المستخدم غير موجود" });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "توكن غير صالح" });
  }
};

const adminOnly = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "غير مصرح" });
  if (!req.user.is_admin) return res.status(403).json({ message: "مطلوب صلاحيات المدير" });
  next();
};

module.exports = { authMiddleware, adminOnly };
