import React from "react";
import Project from "../components/Project";
import { motion } from "framer-motion";
import "../Styles/Projects.css";
import { projectsArray } from "../data/projectsArray";
import Marquee from "react-fast-marquee";
import Carousel from "../Carousel/Carousel"
const Projects = () => {
  return (
    <div className="black-background project-lists-container">
      <div className="black-background-header project-lists-header">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{
            once: true,
          }}
        >
          <span>03. </span>My Projects
        </motion.p>
        {/* <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{
            once: true,
          }}
          className="black-background-line"
        ></motion.span> */}
      </div>
      <div className="projects-list">
        {/* <Marquee speed={150}>
          {projectsArray.map((current, index) => (
            <Project index={index} currentProject={current} />
          ))}
        </Marquee> */}
        <Carousel items={projectsArray} itemsToShow={3}/>
      </div>
    </div>
  );
};

export default Projects;
