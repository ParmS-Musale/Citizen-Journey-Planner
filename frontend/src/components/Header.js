// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="./logo.jpg" // No need for require
            alt="logo"
            className="h-12 w-auto mr-2"
          />

          <h1 className="text-xl font-bold">Citizen TravelTrekker</h1>
        </div>
        <nav className="flex items-center space-x-6">
          <Link
            to="/"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Services
          </Link>
          <div className="relative">
            <button />
          </div>
          <Link
            to="/login"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 mx-6 rounded transition-colors duration-300"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
