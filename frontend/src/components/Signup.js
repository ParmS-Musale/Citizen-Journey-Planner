// src/components/Signup.js
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://citizen-journey-planner-backend.onrender.com/api/auth/signup",
        formData
      );
      toast.success("Signup successful!");
      navigate("/login");
    } catch (error) {
      toast.error(
        "Error: " + (error.response?.data?.message || "Signup failed.")
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className=" bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
