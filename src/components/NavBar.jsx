import React from "react";
import logoP from "../assets/logoP2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";
import { NavLink } from "react-router-dom";
const NavBar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img src={logoP} alt="" className="mx-2 w-10 h-10 rounded-full" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={isDarkMode ? `text-white` : `text-black`}
        >
          {isDarkMode ? <LuSun /> : <LuMoon />}
        </button>
        <NavLink
          target="blank"
          to={`https://www.facebook.com/nguyen.phat.155373/`}
        >
          <FaFacebook />
        </NavLink>
        <NavLink target="blank" to={`https://github.com/Phat3861-hub`}>
          <FaGithub />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
