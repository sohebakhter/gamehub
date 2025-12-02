import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      {/* Logo */}
      <div className="w-11/12 mx-auto flex items-center justify-center mb-8">
        <img
          src={logo}
          alt="GameHub Logo"
          className="w-20 h-20 object-contain rounded-full"
        />
      </div>

      {/* Footer Links */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-gray-300">
        <nav>
          <h6 className="text-red-400 font-bold mb-3">Explore</h6>
          <Link to="/" className="block link-hover mb-1">
            Home
          </Link>
          <Link to="/game/allgame" className="block link-hover mb-1">
            Games
          </Link>
          <Link to="/" className="block link-hover mb-1">
            Promotions
          </Link>
          <Link to="/about-us" className="block link-hover mb-1">
            About Us
          </Link>
        </nav>

        <nav>
          <h6 className="text-red-400 font-bold mb-3">Company</h6>
          <Link to="/" className="block link-hover mb-1">
            Contact
          </Link>
          <Link to="/" className="block link-hover mb-1">
            Careers
          </Link>
          <Link to="/" className="block link-hover mb-1">
            Press
          </Link>
          <Link to="/" className="block link-hover mb-1">
            Blog
          </Link>
        </nav>

        <nav>
          <h6 className="text-red-400 font-bold mb-3">Legal</h6>
          <Link to="/" className="block link-hover mb-1">
            Terms of Use
          </Link>
          <Link to="/" className="block link-hover mb-1">
            Privacy Policy
          </Link>
          <Link to="/" className="block link-hover mb-1">
            Cookie Policy
          </Link>
        </nav>

        {/* Social Links */}
        <div>
          <h6 className="text-red-400 font-bold mb-3">Follow Us</h6>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 hover:text-red-400"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 hover:text-red-400"
              >
                <path d="M4.98 3.5c0 1.381-1.115 2.5-2.49 2.5-1.373 0-2.49-1.119-2.49-2.5 0-1.381 1.117-2.5 2.49-2.5 1.375 0 2.49 1.119 2.49 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.982v16h4.779v-8.354c0-4.73 6-5.112 6 0v8.354h4.988v-10.231c0-8.412-9.514-8.11-10.785-3.963v-1.806z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 pb-6">
        © {new Date().getFullYear()} GameHub. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
