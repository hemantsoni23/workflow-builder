import { useState } from "react";
import axios from "axios";
const Register = ({ switchToLogin, onSubmit, close }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(formData);
  };



    const registerAPI = async() => {

        try {
          const response = await axios.post("/api/auth/register", { formData })
          switchToLogin()
          alert("Registration Successfull!")
        } catch (error) {
            console.log(error)
        }
   }



  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={close} className="absolute top-2 right-2 text-xl">✖</button>
        <h2 className="text-2xl text-black font-semibold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
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
              className="w-full px-4  text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"

                      onClick={registerAPI}
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <button onClick={switchToLogin} className="text-blue-500">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
