import React from "react";
import { PROJECTS } from "../constants";
import { animate, motion, transform } from "framer-motion";
import { NavLink } from "react-router-dom";

const Projects = ({ isDarkMode }) => {
  return (
    <div className="border-b  border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Personal Project
      </motion.h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 lg:mr-20"
            >
              <div className="relative ">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <a
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               w-10 h-10 flex items-center justify-center 
               bg-white text-black rounded-full shadow-lg z-10"
                  data-fancybox
                  href={project.demo}
                >
                  <i class="fa-solid fa-play"></i>
                </a>
                <img
                  src={project.image}
                  alt=""
                  className="mb-6 rounded-md w-full h-40 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`mr-2 rounded  px-2 py-1 text-sm font-medium bg-neutral-900  ${
                    isDarkMode ? `text-purple-800` : `text-white`
                  } `}
                >
                  {tech}
                </span>
              ))}
              <div className="mt-2 space-x-2">
                <button
                  className={`py-2 px-3 bg-purple-400  rounded ${
                    isDarkMode ? `text-neutral-800` : `text-white`
                  }`}
                >
                  <NavLink to={project.viewCode}>View Code</NavLink>
                </button>
                <button
                  className={`py-2 px-3 bg-purple-400  rounded ${
                    isDarkMode ? `text-neutral-800` : `text-white`
                  }`}
                >
                  <NavLink to={project.liveDemo}>Live Demo</NavLink>
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
