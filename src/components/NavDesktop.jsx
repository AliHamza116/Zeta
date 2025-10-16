import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const NavDesktop = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false); // NEW
  const isNotHome =
    location.pathname !== "/" && location.pathname !== "/press&news" && location.pathname !== "/industries" ;
  const isWhiteBg = scrolled || hovering || isNotHome;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Decide background and text color based on state

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full fixed top-0 z-50 flex justify-between lg:justify-around items-center transition-all duration-300 px-4 sm:px-6 lg:px-0 
    ${scrolled ? "shadow" : ""}`}
        style={{
          backgroundColor: isWhiteBg ? "white" : "transparent",
          height: scrolled ? "70px" : "100px",
        }}
        onMouseEnter={() => !scrolled && setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Logo */}
        <img
          src="/zeta_logoPrimary.svg"
          alt="Logo"
          className={`transition-all duration-300 ${
            scrolled ? "w-[70px] h-[70px]" : "w-[90px] h-[90px]"
          }`}
        />
        {/* Tablet/Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-10">
          <ul
            className={`flex gap-3 sm:gap-4 lg:gap-8 text-xs sm:text-sm lg:text-[15px] font-stretch-50% font-extrabold justify-center items-center lg:leading-tight lg:tracking-wide ${
              isWhiteBg ? "text-black" : "text-white"
            }`}
          >
            <li className="cursor-pointer hover:text-[#D9F45F]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#D9F45F]"
                      : isWhiteBg
                      ? "text-black"
                      : "text-white"
                  } hover:text-[#D9F45F] transition-colors duration-300`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-[#D9F45F]">
              <NavLink
                to="/press&news"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#D9F45F]"
                      : isWhiteBg
                      ? "text-black"
                      : "text-white"
                  } hover:text-[#D9F45F] transition-colors duration-300 `
                }
              >
                Press&News
              </NavLink>
            </li>
            <li className="cursor-pointer ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#D9F45F]" // Active page = pink
                      : isWhiteBg
                      ? "text-black" // White navbar background or hovering navbar = black
                      : "text-white" // Transparent navbar background = white text
                  } hover:text-[#D9F45F] transition-colors duration-300`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <div className="w-0 h-[50px] border-0 border-r hidden sm:block"></div>
            <li className="cursor-pointer hover:text-[#D9F45F]">
              <NavLink
                to="/ourvirtues"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#D9F45F]"
                      : isWhiteBg
                      ? "text-black" // White navbar background or hovering navbar = black
                      : "text-white" // Transparent navbar background = white text
                  } hover:text-[#D9F45F] transition-colors duration-300`
                }
              >
                Our Virtues
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-[#D9F45F]">
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[#D9F45F]"
                      : isWhiteBg
                      ? "text-black" // White navbar background or hovering navbar = black
                      : "text-white"
                  } hover:text-[#D9F45F] transition-colors duration-300`
                }
              >
                Industries
              </NavLink>
            </li>
       {/* <li className="cursor-pointer hover:text-[#D9F45F]">Partners</li> */}

            {/* <div className="w-0 h-[50px] border-0 border-r hidden sm:block"></div> */}
            {/* <li className="text-[11px] sm:text-[13px] font-normal cursor-pointer hover:text-[#D9F45F]">
              ZMP Login
            </li> */}
          </ul>

          {/* Search + Button */}
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-5 lg:pl-5 lg:-mr-5">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`hover:text-[#a8c93f] cursor-pointer text-[18px] sm:text-[20px] font-bold transition-colors duration-300 ${
                isWhiteBg ? "text-black" : "text-white"
              }`}
            />
            <button
              className={`rounded-xl px-4 lg:px-7 sm:px-6 py-2 sm:py-3 text-md font-extrabold cursor-pointer transition-colors duration-300 
               ${
                 scrolled || hovering
                   ? "bg-[#D9F45F] text-black hover:bg-[#a8c93f] hover:text-white" // Scroll/hover state
                   : "bg-[#D9F45F] text-black hover:bg-[#a8c93f] hover:text-white" // Default state
               }`}
            >
              Request A Demo
            </button>
          </div>
        </div>

        {/* Mobile Nav Button */}
        <div className="flex lg:hidden items-center gap-4">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`hover:text-blue-600 cursor-pointer text-[20px] font-bold transition-colors duration-300 ${
              isWhiteBg ? "text-black" : "text-white"
            }`}
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className={`${isWhiteBg ? "text-black" : "text-white"}`}
            />
          </button>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 h-[4px] w-full">
          <div
            className="h-full transition-all duration-150 ease-linear"
            style={{
              width: `${scrollWidth}%`,
              background:
                "linear-gradient(to right, #57602B, #262918, #C4DC56, #A6BA54, #D9F45F,#216254)",
            }}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full bg-[#D9F45F] shadow-lg z-40 lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 font-bold text-black">
        <li className="cursor-pointer hover:text-[#D9F45F]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black"
                      : isWhiteBg
                      ? "text-black"
                      : "text-white"
                  } hover:text-black transition-colors duration-300`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-black">
              <NavLink
                to="/press&news"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black"
                      : isWhiteBg
                      ? "text-black"
                      : "text-white"
                  } hover:text-black transition-colors duration-300 `
                }
              >
                Press&News
              </NavLink>
            </li>
            <li className="cursor-pointer ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black" // Active page = pink
                      : isWhiteBg
                      ? "text-black" // White navbar background or hovering navbar = black
                      : "text-white" // Transparent navbar background = white text
                  } hover:text-black transition-colors duration-300`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <div className="w-0 h-[50px] border-0 border-r hidden sm:block"></div>
            <li className="cursor-pointer hover:text-black">
              <NavLink
                to="/ourvirtues"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black"
                      : isWhiteBg
                      ? "text-black" // White navbar background or hovering navbar = black
                      : "text-white" // Transparent navbar background = white text
                  } hover:text-black transition-colors duration-300`
                }
              >
                Our Virtues
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-black">
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-black"
                      : isWhiteBg
                      ? "text-black" // White navbar background or hovering navbar = black
                      : "text-white"
                  } hover:text-black transition-colors duration-300`
                }
              >
                Industries
              </NavLink>
            </li>
          <button
            className={`rounded-xl px-4 lg:px-7 sm:px-6 py-2 sm:py-3 text-md font-extrabold cursor-pointer transition-colors duration-300 
    ${
      scrolled || hovering
        ? "bg-[#a8c93f] text-black hover:bg-[#a8c93f]" // Scroll/hover state
        : "bg-[#ECEEF7] text-black hover:bg-[#a8c93f]" // Default state
    }`}
          >
            Request A Demo
          </button>
        </ul>
      </div>
    </>
  );
};

export default NavDesktop;
