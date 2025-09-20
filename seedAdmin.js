const bcrypt = require("bcryptjs");
const { sequelize, User } = require("./models");
require("dotenv").config();

const run = async () => {
  try {
    await sequelize.sync();
    const email = "admin@suqalfallah.local";
    const exist = await User.findOne({ where: { email } });
    if (!exist) {
      const hashed = await bcrypt.hash("admin1234", 10);
      const admin = await User.create({ fullName: "Admin", email, phone: "000", password: hashed, is_admin: true });
      console.log("Admin created:", admin.email, "password: admin1234");
    } else {
      console.log("Admin already exists");
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
