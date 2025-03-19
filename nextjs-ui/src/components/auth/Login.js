"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "../../utils/oAuthGoogle"
const Login = ({ switchToRegister, onSubmit, close }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const clientId="126699093256-3h76s04u3o9uee28pvapk9uh4ebpj6e9.apps.googleusercontent.com"
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
  };

      const loginAPI = async () => {
        try {
          const response = await axios.post("/api/auth/login", { formData } );
            console.log(response)
            if (response.data?.token) {
            localStorage.setItem("user", JSON.stringify(response.data?.user));
              router.push("/");
              close()

              setTimeout(() => {
                alert(`You are logged in! Token: ${response.data.token}`);
              }, 300)
            } else {
                alert("Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert(error?.response?.data?.message ||" Server error!");
        }
    };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={close} className="absolute top-2 right-2 text-xl">✖</button>
        <h2 className="text-2xl text-black font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={loginAPI}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Dont have an account?
          <button onClick={switchToRegister} className="text-blue-500">
            Sign up
          </button>
        </p>
            <GoogleOAuthProvider clientId={clientId} >
          <Google close={close } />
          </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
