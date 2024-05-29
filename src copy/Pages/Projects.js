import React from "react";
import Project from "../components/Project";
import {motion} from 'framer-motion'
import "../Styles/Projects.css"
import {projectsArray} from "../data/projectsArray"

const Projects = () => {
  return (
    <div className="black-background project-lists-container">
      <div className="black-background-header project-lists-header">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5, delay: 0.3 }}
          viewport={{
            once: true,
          }}
        >
          <span>03. </span>My Projects
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .5, delay: 0.6 }}
          viewport={{
            once: true,
          }}
          className="black-background-line"
        ></motion.span>
      </div>
      <div className="projects-list">
        {projectsArray
          .map((current, index) => (
            <Project index={index} currentProject={current} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
