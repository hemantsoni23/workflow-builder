
"use client";

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";


const GoogleLoginButton = ({close}) => {
  const router = useRouter();
 const googleLogin = async (token) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/auth/google/login`,
      { token },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error.response?.data?.message || "An error occurred. Please try again."
    );
  }
};


  const handleGoogleLogin = async (token) => {
    try {

        const userData = await googleLogin(token);
        close()
         localStorage.setItem("user", JSON.stringify(userData?.user));
      const message = userData?.message || "Login successful!";
        alert(message)
      return userData;
    } catch (error) {
      console.error(
        "Error during Google login:A",
        error.response?.data || error.message
      );
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Login failed. Please try again.";
     alert(message)
      throw error;
    }
  };

  const handleLoginSuccess = async (response) => {
      try {
        console.log(response)
      await handleGoogleLogin(response.credential);
      router.push("/");
    } catch (error) {
      console.error("Login process failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
    alert("Login failed. Please try again.");
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={handleLoginFailure}
      useOneTap
    />
  );
};

export default GoogleLoginButton;
