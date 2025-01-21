import React from "react";
import logoP from "../assets/logoP2.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logoP} alt="" className="mx-2 w-10 h-10 rounded-full" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaFacebook />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default NavBar;
