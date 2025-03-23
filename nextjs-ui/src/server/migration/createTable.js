import { sequelize } from "@/server/config/db";
// import User from "@/server/entities/user"; // Add other models as needed

export const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Auto-migrates changes
    console.log("✅ All tables created successfully!");
  } catch (error) {
    console.error("❌ Error creating tables:", error.message);
  }
};
