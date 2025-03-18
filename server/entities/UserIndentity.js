import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import User from "./User.js";

const UserIdentity = sequelize.define(
  "UserIdentity",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Only needed for non-OAuth users
    },
    trackEvents: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    newsLetter: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tokenVersion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false, // Example: "google", "local"
    },
  },
  {
    timestamps: true,
  }
);

// Relationships
UserIdentity.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

export default UserIdentity;
