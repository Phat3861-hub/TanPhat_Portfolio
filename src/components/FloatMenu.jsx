import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/Theme/ThemeContext";

const FloatMenu = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div
      className={`fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-10 p-2  text-white rounded-lg shadow-lg  text-2xl bg-gray-800`}
    >
      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="text-white">
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
  );
};

export default FloatMenu;
