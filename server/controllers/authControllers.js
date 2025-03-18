


import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User } from "../entities/index.js"; // Assuming Sequelize ORM
import { verifyToken } from "../utils/verifyGoogleToken.js";
import { Op } from "sequelize";

dotenv.config();

// REGISTER USER
export const registerUser = async (req, res) => {
  const { formData } = req.body;
  const { name, email, password } = formData;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  const { formData } = req.body;
  const { email, password } = formData;
  console.log(formData)
  try {
    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords securely
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" });

    // Store JWT in HTTP-Only Cookie
    res.cookie("token", token, {
      httpOnly: true,  // Prevents access from JavaScript
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Protects against CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    });

    res.status(200).json({ message: "Login successful", token:token , user});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};





export const googleLogin = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    const userData = await verifyToken(token);

    if (!userData) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    let user = await User.findOne({
      where: {
        [Op.or]: [{ googleId: userData.sub }, { email: userData.email }],
      },
    });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password", salt);

    if (!user) {

      user = await User.create({
        googleId: userData.sub,
        name: userData.name,
        email: userData.email,
        profilePicture: userData.picture,
        isGoogleUser: true,
        password:hashedPassword
      });

    } else {

      // Update profile picture if changed
      if (user.profilePicture !== userData.picture) {
        user.profilePicture = userData.picture;
        await user.save();
      }

    }


    const authToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "24h",
    });

      res.cookie("token", authToken, {
      httpOnly: true,  // Prevents access from JavaScript
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Protects against CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    });

    return res.status(200).json({
      token: authToken,
      user,
      message: "Login successful! Welcome back.",
    });
  } catch (error) {
    console.error("Google login error:", error);
    return res.status(500).json({ message: "Google login failed. Please try again later.", error: error.message });
  }
};
