import React from 'react'
import logo from '../assets/img/type4pallogo.png'
import { FaFacebook, FaFacebookF, FaTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FAF8F5] to-[#FBF8F5] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Logo, Privacy/Terms, Social Icons */}
        <div className="flex  justify-between items-center pb-6 border-b border-gray-200">
          {/* Logo */}
          <div className="mb-4 sm:mb-0">
            <img src={logo} alt="type4 pal logo" srcset=""className="md:w-[139px] w-[100px] md:h-[96px] h-[76px]"  />
          </div>

          {/* Privacy Policy, Terms, and Social Icons */}
          <div className="flex items-center  gap-2">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Terms
            </a>
            <div className="flex space-x-4">
              {/* Twitter Icon */}
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
                <FaTwitter />

              </a>
              {/* Facebook Icon */}
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
                <FaFacebookF />

              </a>
            </div>
          </div>
        </div>

        {/* Bottom section: Navigation Links and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 mt-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 mb-4 sm:mb-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Login
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Sign Up
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Pricing Plans
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Process
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Contacts
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
              Blog
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm sm:text-base">
            &copy; 2025 Colicare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
