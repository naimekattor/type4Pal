import React, { useEffect, useState } from "react";
import logo from "../assets/img/type4pallogo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      if (window.scrollY > 0) {
        header.classList.add("sticky", "top-0", "z-50");
      } else {
        header.classList.remove("sticky", "top-0", "z-50");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className=" bg-gradient-to-r from-[#FFFFFF] to-[#EAD9B7] "
    >
      <div className=" 2xl:max-w-[1536px] xl:max-w-7xl lg:max-w-[992px] md:max-w-[768px] md:mx-auto mx-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to={"/"}>
              <img
                src={logo}
                alt="type4 pal logo"
                className="md:w-[139px] w-[100px] md:h-[96px] h-[76px]"
              />
            </Link>
          </div>
          <span
            className="md:hidden block text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBarsStaggered />
          </span>
          <ul className="md:flex hidden gap-6 text-[18px] font-[600] ">
            <li
              className={`cursor-pointer hover:border-b-[#FF6F61] hover:text-[#FF6F61] hover:border-b-2 ${
                active === "home"
                  ? "text-[#FF6F61] border-b-[#FF6F61t] border-b-2"
                  : ""
              }`}
            >
              <a href="#" onClick={() => setActive("home")}>
                Home
              </a>
            </li>
            <li
              className={`cursor-pointer hover:border-b-[#FF6F61] hover:text-[#FF6F61] hover:border-b-2 ${
                active === "Process"
                  ? "text-[#FF6F61] border-b-[#FF6F61t] border-b-2"
                  : ""
              }`}
            >
              <a href="#HowItWorks" onClick={() => setActive("Process")}>
                Process
              </a>
            </li>
            <li
              className={`cursor-pointer hover:border-b-[#FF6F61] hover:text-[#FF6F61] hover:border-b-2 ${
                active === "Quiz"
                  ? "text-[#FF6F61] border-b-[#FF6F61t] border-b-2"
                  : ""
              }`}
            >
              <a href="#Quiz" onClick={() => setActive("Quiz")}>
                Feature
              </a>
            </li>
            <li
              className={`cursor-pointer hover:border-b-[#FF6F61] hover:text-[#FF6F61] hover:border-b-2 ${
                active === "Pricing"
                  ? "text-[#FF6F61] border-b-[#FF6F61t] border-b-2"
                  : ""
              }`}
            >
              <a href="#Pricing" onClick={() => setActive("Pricing")}>
                Pricing
              </a>
            </li>

            <li
              className={`cursor-pointer hover:border-b-[#FF6F61] hover:text-[#FF6F61] hover:border-b-2 ${
                active === "FAQ"
                  ? "text-[#FF6F61] border-b-[#FF6F61t] border-b-2"
                  : ""
              }`}
            >
              <a href="#FAQ" onClick={() => setActive("FAQ")}>
                FAQ
              </a>
            </li>
            <li
              className={`cursor-pointer hover:border-b-[#FF6F61] hover:text-[#FF6F61] hover:border-b-2 ${
                active === "Blog"
                  ? "text-[#FF6F61] border-b-[#FF6F61t] border-b-2"
                  : ""
              }`}
            >
              <a href="#" onClick={() => setActive("Blog")}>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className={`absolute bg-white text-black z-10 min-h-screen w-full top-0  md:hidden  flex flex-col  transition-transform duration-300 ${
          showMenu ? " translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="">
            <img
              src={logo}
              alt="type4 pal logo"
              className="md:w-[139px] w-[100px] md:h-[78px] h-[76px]"
            />
          </div>
          <span
            className="text-2xl p-1 border-1 border-red-600 bg-accent-content"
            onClick={() => setShowMenu(false)}
          >
            <RxCross1 className="text-red-600 " />
          </span>
        </div>

        <div className="py-8 px-4">
          <nav className=" md:col-span-6 col-span-1 ">
            <ul className="flex flex-col justify-start  space-y-4 text-[12px] font-normal ">
              <li className="cursor-pointer bg-[#EAD9B7] rounded-2xl py-3 px-6  text-[14px] font-[500]">
                <a href="#" onClick={() => setShowMenu(false)}>
                  Home
                </a>
              </li>
              <li className="cursor-pointer bg-[#EAD9B7] rounded-2xl py-3 px-6  text-[14px] font-[500]">
                <a href="#HowItWorks" onClick={() => setShowMenu(false)}>
                  Process
                </a>
              </li>
              <li className="cursor-pointer bg-[#EAD9B7] rounded-2xl py-3 px-6  text-[14px] font-[500]">
                <a href="#Quiz" onClick={() => setShowMenu(false)}>
                  Feature
                </a>
              </li>
              <li className="cursor-pointer bg-[#EAD9B7] rounded-2xl py-3 px-6  text-[14px] font-[500]">
                <a href="#Quiz" onClick={() => setShowMenu(false)}>
                  Pricing
                </a>
              </li>

              <li className="cursor-pointer bg-[#EAD9B7] rounded-2xl py-3 px-6  text-[14px] font-[500]">
                <a href="#FAQ" onClick={() => setShowMenu(false)}>
                  FAQ
                </a>
              </li>

              <li className="cursor-pointer bg-[#EAD9B7] rounded-2xl py-3 px-6  text-[14px] font-[500]">
                <a href="#" onClick={() => setShowMenu(false)}>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
