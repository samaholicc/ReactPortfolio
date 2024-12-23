import React, { useEffect, useRef } from "react";

import header_bg_color from "../assets/header-bg-color.png";
import moon_icon from "../assets/moon_icon.png";
import sun_icon from "../assets/sun_icon.png";

import menu_black from "../assets/menu-black.png";
import menu_white from "../assets/menu-white.png";
import close_black from "../assets/close-black.png";
import close_white from "../assets/close-white.png";

const Navbar = () => {
  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        navRef.current.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      } else {
        navRef.current.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20"
        );
        navLinkRef.current.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/50",
          "dark:bg-transparent"
        );
      }
    });

    // Set the initial theme based on localStorage or system preferences
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src={header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[6%] py-4 flex items-center justify-between z-50"
      >
        <ul
          ref={navLinkRef}
          className="hidden md:flex items-center gap-12 lg:gap-16 rounded-full px-10 py-4 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/50 dark:bg-transparent w-full justify-around"
        >
          <li className="hover:border-b-2 border-purple-500">
            <a href="#about" className="no-underline hover:border-b-2 border-purple-500">À propos</a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#educations" className="no-underline hover:border-b-2 border-purple-500">BTS SIO</a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#EcoleEntreprise" className="no-underline hover:border-b-2 border-purple-500">École et Entreprise</a>
          </li>
         
          
          <li className="hover:border-b-2 border-purple-500">
            <a href="#work" className="no-underline hover:border-b-2 border-purple-500">Réalisations</a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#projects" className="no-underline hover:border-b-2 border-purple-500">Projets</a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#VeilleTechnologique" className="no-underline hover:border-b-2 border-purple-500">Veille technologique</a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#contact" className="no-underline hover:border-b-2 border-purple-500">Contact</a>
          </li>
        </ul>

        {/* Toggle Theme Button */}
        <button 
          onClick={toggleTheme} 
          className="ml-4 px-3 py-1 border rounded text-white transition"
        >
          {/* Show moon icon for light mode */}
          <img src={moon_icon} alt="Switch to dark mode" className="w-6 block dark:hidden" />
          
          {/* Show sun icon for dark mode */}
          <img src={sun_icon} alt="Switch to light mode" className="w-6 hidden dark:block" />
        </button>

        <button className="block md:hidden ml-3" onClick={openMenu}>
          <img src={menu_black} alt="" className="w-6 dark:hidden" />
          <img src={menu_white} alt="" className="w-6 hidden dark:block" />
        </button>

        {/* -- ----- menu mobile ------  -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img
              src={close_black}
              alt=""
              className="w-5 cursor-pointer dark:hidden"
            />

            <img
              src={close_white}
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>

          <li className="hover:border-b-2 border-purple-500">
            <a href="#about" onClick={closeMenu} className="no-underline">
              À propos
            </a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#educations" onClick={closeMenu} className="no-underline">
              BTS SIO
            </a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#EcoleEntreprise" onClick={closeMenu} className="no-underline">
            École et Entreprise
            </a>
          </li>
          

          <li className="hover:border-b-2 border-purple-500">
            <a href="#work" onClick={closeMenu} className="no-underline">
              Réalisations
            </a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#projects" onClick={closeMenu} className="no-underline">
              Projets
            </a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#VeilleTechnologique" onClick={closeMenu} className="no-underline">
              Veille technologique
            </a>
          </li>
          <li className="hover:border-b-2 border-purple-500">
            <a href="#contact" onClick={closeMenu} className="no-underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
