import  DataTypes  from "sequelize";
import { sequelize } from "@/server/config/db";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
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
      defaultValue: "null",
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
      defaultValue: "USER",
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export default User;
