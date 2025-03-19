import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/server/entities/users";
import { verifyToken } from "@/server/utils/verifyGoogle";
import { Op } from "sequelize";

// REGISTER USER
export async function registerUser(req) {
  try {
    const { formData } = await req.json();
    const { name, email, password } = formData;

    // Check if user exists
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
  }
}

// LOGIN USER
export async function loginUser(req) {
  try {
    const { formData } = await req.json();
    const { email, password } = formData;
     console.log(formData)
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }
      console.log(isMatch)

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" });

    const response = NextResponse.json({ message: "Login successful", token, user }, { status: 200 });

    // Store JWT in HTTP-Only Cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server Error", error: error.message }, { status: 500 });
  }
}

// GOOGLE LOGIN
export async function googleLogin(req) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ message: "Token is required" }, { status: 400 });
    }

    const userData = await verifyToken(token);
    if (!userData) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
    }

    let user = await User.findOne({
      where: { [Op.or]: [{ googleId: userData.sub }, { email: userData.email }] },
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
        password: hashedPassword,
      });
    } else if (user.profilePicture !== userData.picture) {
      user.profilePicture = userData.picture;
      await user.save();
    }

    const authToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" });

    const response = NextResponse.json({
      token: authToken,
      user,
      message: "Login successful! Welcome back.",
    });

    response.cookies.set("token", authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return response;
  } catch (error) {
    console.error("Google login error:", error);
    return NextResponse.json({ message: "Google login failed", error: error.message }, { status: 500 });
  }
}


export async function testing(req) {
  try {

    return NextResponse.json({ message:"testing working fine..." }, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
