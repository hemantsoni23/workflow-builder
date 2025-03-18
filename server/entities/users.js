

import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
// import UserIdentity from "./UserIdentity.js";
// import Project from "./Project.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID, // Using UUID for scalability
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true, // Optional like Flowise
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Optional for OAuth users
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"null"
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isGoogleUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    platformRole: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "USER", // Example: USER, ADMIN
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active", // Helps manage disabled/suspended accounts
    },
  },
  {
    timestamps: true,
    paranoid: true, // Enables soft delete functionality
  }
);

// Relationships for future expension...
// User.hasOne(UserIdentity, { foreignKey: "userId", onDelete: "CASCADE" }); // One-to-One
// User.hasMany(Project, { foreignKey: "ownerId", onDelete: "CASCADE" }); // One-to-Many

export default User;
