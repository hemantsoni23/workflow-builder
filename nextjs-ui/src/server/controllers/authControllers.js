import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/server/entities/users";
import { verifyGoogleToken } from "@/server/utils/verifyGoogle";
import { Op } from "sequelize";
import { syncDatabase } from "@/server/migration/createTable";

syncDatabase();

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Lax",
  path: "/",
  maxAge: 24 * 60 * 60 * 1000,
};

// REGISTER USER
export async function registerUser(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

// LOGIN USER
export async function loginUser(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
    response.cookies.set("auth_token", token, COOKIE_OPTIONS);

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

// GOOGLE LOGIN
export async function googleLogin(req) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json({ message: "Token is required" }, { status: 400 });
    }

    const userData = await verifyGoogleToken(token);
    if (!userData) {
      return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
    }

    let user = await User.findOne({
      where: { [Op.or]: [{ googleId: userData.sub }, { email: userData.email }] },
    });

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("password", salt);
      user = await User.create({
        googleId: userData.sub,
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      });
    }

    const authToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    const response = NextResponse.json({ message: "Login successful!" }, { status: 200 });
    response.cookies.set("auth_token", authToken, COOKIE_OPTIONS);

    return response;
  } catch (error) {
    console.error("Google login error:", error);
    return NextResponse.json({ message: "Google login failed" }, { status: 500 });
  }
}

// Verify token
export async function verifyToken(req) {
  try {
    const token = req.cookies.get("auth_token");
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    return NextResponse.json({ userId:user.id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Token verification failed" }, { status: 401 });
  }
}

