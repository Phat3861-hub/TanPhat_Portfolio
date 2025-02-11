import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Technologies from "../../components/Technologies";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import { useTheme } from "../../context/Theme/ThemeContext";

const HomTemplate = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
      <div
        className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-300 ${
          isDarkMode ? "text-neutral-300 " : "text-neutral-900 "
        }`}
      >
        {/* Light/Dark Mode Background */}
        <div className="fixed top-0 -z-10 h-full w-full">
          {isDarkMode ? (
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          ) : (
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
          )}
        </div>

        <div className="container">
          <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Technologies isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default HomTemplate;
