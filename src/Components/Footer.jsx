import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Recipe_Logo.jpg";
import { SiFacebook } from "react-icons/si";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5EBE0] mt-0  shadow-md">
      <footer className="container mx-auto flex flex-wrap items-center justify-between px-6 py-6">
        {/* Logo Section */}
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src={Logo}
            alt="Recipe logo"
            className="h-20 w-28 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 mb-4 sm:mb-0">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/Support"
                className="font-serif text-lg antialiased font-semibold hover:text-red-600 transition"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/TermsAndPolices"
                className="font-serif text-lg antialiased font-semibold hover:text-red-600 transition"
              >
                Terms and Policies
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="font-serif text-lg antialiased font-semibold hover:text-red-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="font-serif text-lg antialiased font-semibold hover:text-red-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 text-4xl p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-transform transform hover:scale-110"
          >
            <SiFacebook />
          </a>
          <a
            href="https://whatsapp.com"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500 text-4xl p-3 rounded-full
             bg-gray-100 hover:bg-green-100 transition-transform transform hover:scale-110"
          >
            <FaWhatsappSquare />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 text-4xl p-3 rounded-full
             bg-gray-100 hover:bg-pink-100 transition-transform transform hover:scale-110"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 text-4xl p-3 rounded-full
             bg-gray-100 hover:bg-blue-100 transition-transform transform hover:scale-110"
          >
            <FaTwitterSquare />
          </a>
        </div>

        {/* Footer Branding */}
        <div className="text-center mb-6">
          <h1 className="font-mono text-2xl lg:text-3xl font-bold">
            Foodie's Fantasy
          </h1>
          <h2 className="text-sm lg:text-base text-gray-600 mt-2">
            © 2024 Foodie's Fantasy. All Rights Reserved.
          </h2>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
