import React from "react";
import logo from "../assets/img/type4pallogo.png";
import { FaFacebook, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Storebutton from "../assets/img/Storebutton.png";
import Applebutton from "../assets/img/Applebutton.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterest,
  FaReddit,
} from "react-icons/fa";
import { AiFillTikTok, AiOutlineDownload } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FAF8F5] to-[#FBF8F5] py-8 px-4  font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex md:flex-row flex-col  justify-between items-center pb-6 border-b border-gray-200">
          {/* Logo */}
          <div className="mb-4 sm:mb-0">
            <img
              src={logo}
              alt="type4 pal logo"
              loading="lazy"
              className="md:w-[139px] w-[100px] md:h-[96px] h-[76px]"
            />
          </div>

          {/* Container with responsive flex direction */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center pb-4">
            {/* Google Play Store Button */}
            <Link
              target="_blank"
              to={"https://play.google.com/"}
              className="relative w-full bg-[#32302E] hover:bg-[#004f42] transition-colors duration-200 rounded-lg px-2 py-2 flex items-center justify-between group shadow-lg hover:shadow-xl transform hover:scale-105  h-16 flex-1"
            >
              {/* Left section with Google Play icon and text */}
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="34"
                    viewBox="0 0 30 34"
                    fill="none"
                    className="w-7 h-8 sm:w-8 sm:h-9 md:w-9 md:h-10"
                  >
                    <path
                      d="M13.9255 16.2463L0.324219 31.0082C0.325496 31.0108 0.325496 31.0148 0.326774 31.0174C0.744509 32.6203 2.17528 33.7999 3.87433 33.7999C4.55395 33.7999 5.19141 33.6118 5.73817 33.2826L5.7816 33.2565L21.0909 24.223L13.9255 16.2463Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M27.686 13.7326L27.6733 13.7235L21.0636 9.80568L13.6172 16.5818L21.0904 24.2214L27.6643 20.3428C28.8166 19.7053 29.5997 18.463 29.5997 17.0312C29.5997 15.6073 28.8281 14.3714 27.686 13.7326Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M0.324412 2.99053C0.242653 3.29883 0.199219 3.62281 0.199219 3.95724V30.0428C0.199219 30.3772 0.242653 30.7012 0.325689 31.0082L14.3933 16.6238L0.324412 2.99053Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M14.0264 16.9999L21.0653 9.8031L5.77394 0.736914C5.21823 0.395952 4.56928 0.199999 3.87561 0.199999C2.17656 0.199999 0.743231 1.38226 0.325496 2.98648C0.325496 2.98778 0.324219 2.98909 0.324219 2.9904L14.0264 16.9999Z"
                      fill="#34A853"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-start text-white">
                  <span className="text-[10px] font-normal  uppercase">
                    Download on
                  </span>
                  <span className="text-[10px] md:text-[18px] font-normal ">
                    Google Play
                  </span>
                </div>
              </div>

              {/* Right section with download icon */}
              {/* <div className="flex-shrink-0 text-white group-hover:animate-bounce">
                <AiOutlineDownload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div> */}
            </Link>

            {/* Apple App Store Button */}
            <Link
              target="_blank"
              to={"https://apps.apple.com/"}
              className="relative w-[200px] bg-[#32302E] hover:bg-[#004f42] transition-colors duration-200 rounded-lg px-2 py-2 flex items-center justify-between group shadow-lg hover:shadow-xl transform hover:scale-105   h-16 flex-1"
            >
              {/* Left section with Google Play icon and text */}
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="35"
                    viewBox="0 0 29 35"
                    fill="none"
                    className="w-7 h-8 sm:w-8 sm:h-9 md:w-9 md:h-10"
                  >
                    <path
                      d="M23.5855 18.4894C23.6025 17.2016 23.9529 15.9388 24.6041 14.8187C25.2553 13.6986 26.1861 12.7574 27.3099 12.0829C26.596 11.0874 25.6541 10.2682 24.5592 9.69026C23.4642 9.11233 22.2463 8.79163 21.0021 8.75363C18.3482 8.48165 15.7753 10.3041 14.4229 10.3041C13.0443 10.3041 10.9621 8.78063 8.71984 8.82566C7.26951 8.87141 5.85605 9.28316 4.61717 10.0208C3.3783 10.7584 2.35626 11.7968 1.65065 13.0347C-1.40586 18.2013 0.874026 25.7944 3.80195 29.9707C5.26687 32.0157 6.97892 34.3 9.21913 34.219C11.4113 34.1302 12.23 32.8542 14.8762 32.8542C17.4977 32.8542 18.2659 34.219 20.5515 34.1675C22.9039 34.1302 24.3859 32.1134 25.7994 30.049C26.852 28.5919 27.6619 26.9814 28.1992 25.2773C26.8326 24.713 25.6663 23.7684 24.8459 22.5613C24.0255 21.3543 23.5871 19.9381 23.5855 18.4894Z"
                      fill="white"
                    />
                    <path
                      d="M19.2677 6.00708C20.5503 4.50389 21.1822 2.57179 21.0292 0.621094C19.0697 0.822021 17.2597 1.73633 15.9598 3.18184C15.3242 3.88801 14.8374 4.70955 14.5273 5.5995C14.2171 6.48945 14.0897 7.43035 14.1522 8.36842C15.1323 8.37827 16.1019 8.17087 16.988 7.76185C17.8741 7.35282 18.6535 6.75284 19.2677 6.00708Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-start text-white">
                  <span className="text-[10px]  font-normal  uppercase">
                    Download on
                  </span>
                  <span className="text-[10px] md:text-[18px] font-normal ">
                    App Store
                  </span>
                </div>
              </div>

              {/* Right section with download icon */}
              {/* <div className="flex-shrink-0 text-white group-hover:animate-bounce">
                <AiOutlineDownload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div> */}
            </Link>
          </div>

          {/* Privacy Policy, Terms, and Social Icons */}
          <div className="flex items-center  gap-2">
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-condiditions"
              className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              Terms
            </Link>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                to={"https://www.facebook.com/profile.php?id=61579243509619"}
              >
                <FaFacebookSquare className="text-3xl hover:text-[#004f42]" />
              </Link>
              <Link
                target="_blank"
                to={"https://www.tiktok.com/@type4.pal?_t=ZS-8ysTCwghFcP&_r=1"}
              >
                <AiFillTikTok className="text-3xl hover:text-[#004f42]" />
              </Link>
              <Link target="_blank" to={"https://www.instagram.com/type4pal/"}>
                <FaInstagramSquare className="text-3xl hover:bg-[#004f42]" />
              </Link>
              <Link target="_blank" to={"https://pin.it/6VXi3toRC"}>
                <FaPinterest className="text-3xl hover:text-[#004f42]" />
              </Link>
              <Link
                target="_blank"
                to={"https://www.reddit.com/r/Type4Pal/s/A4KISnEKNn"}
              >
                <FaReddit className="text-3xl hover:text-[#004f42]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section: */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 mt-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center sm:justify-start gap-4 sm:gap-6 sm:mb-0">
            <div className="flex items-center mb-6 sm:mb-0">
              {/* <input
                type="email"
                placeholder="Email"
                className="bg-white shadow-lg px-2 py-2 focus:outline-none text-black placeholder:text-gray-400 rounded-l-md"
              /> */}
              <Link
                to={"https://type4pal.hashnode.dev/newsletter"}
                className="bg-[#004f42]  py-2 text-white hover:bg-[#05332b] rounded-md px-4  whitespace-nowrap"
              >
                Send Newsletter
              </Link>
            </div>

            <a
              href="#Pricing"
              className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              Pricing Plans
            </a>
            <a
              href="#HowItWorks"
              className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              Process
            </a>
            <a
              href="mailto:yourmail@gmail.com"
              className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              Contacts
            </a>
            <a
              href="https://type4pal.hashnode.dev/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
            >
              Blog
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm sm:text-base mt-4 sm:mt-0">
            &copy; 2025 Type4Pal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
