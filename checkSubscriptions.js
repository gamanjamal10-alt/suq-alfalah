const cron = require("node-cron");
const { Store, Notification } = require("../models");
require("dotenv").config();

const DAYS_BEFORE = parseInt(process.env.NOTIFY_DAYS_BEFORE || "7", 10);

const task = cron.schedule("5 0 * * *", async () => {
  try {
    console.log("[cron] تحقق الاشتراكات...");
    const stores = await Store.findAll();

    const now = new Date();

    for (const store of stores) {
      const endDate = new Date(store.end_date);
      const daysLeft = Math.ceil((endDate - now) / (1000*60*60*24));

      if (now > endDate && store.status !== "expired") {
        store.status = "expired";
        await store.save();
        await Notification.create({
          user_id: store.owner_id,
          message: `انتهت مدة اشتراك متجرك "${store.name}". المتجر مغلق الآن حتى تجدد الاشتراك.`
        });
        console.log(`[cron] store ${store.id} expired`);
        continue;
      }

      if (daysLeft <= DAYS_BEFORE && daysLeft > 0 && !store.last_notification) {
        await Notification.create({
          user_id: store.owner_id,
          message: `تنبيه: اشتراك متجرك "${store.name}" سينتهي خلال ${daysLeft} يوم. الرجاء تجديد الاشتراك لتجنب الإغلاق.`
        });
        store.last_notification = new Date();
        await store.save();
        console.log(`[cron] store ${store.id} notification sent`);
      }
    }
  } catch (err) {
    console.error("[cron] خطأ:", err);
  }
}, { scheduled: false });

module.exports = task;
