import pg from "pg"
import Sequelize  from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
    dialectModule: pg,
  }
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1); // Exit process to avoid further execution
  }
}

export { sequelize };
