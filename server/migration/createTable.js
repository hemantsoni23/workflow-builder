import { sequelize } from "../config/db.js";
import { User, Post } from "../entities/index.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // auto-migrates changes
    console.log("✅ All tables created!");
  } catch (error) {
    console.error("❌ Error creating tables:", error.message);
  }
};

syncDatabase();
