import "../Styles/Project.css";
import React from "react";
import { motion } from "framer-motion";

const Project = ({ index, currentProject }) => {
  const animationDirection = () => {
    if (index % 2 === 0) {
      return { initial: { opacity: 0, x: -35 }, animate: { opacity: 1, x: 0 } }; // For even indexes
    } else {
      return { initial: { opacity: 0, x: 35 }, animate: { opacity: 1, x: 0 } }; // For even indexes
    }
  };
  return (
    <motion.div
      onClick={() => window.open(currentProject.links.live, "_blank")}
      initial={animationDirection().initial}
      whileInView={animationDirection().animate}
      transition={{ duration: 0.3, delay: 0.5 }}
      viewport={{ once: true }}
      className={`project-container ${
        index % 2 == 0 ? "project-container-inverted" : ""
      }`}
    >
      <div className="project-image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/${currentProject.image}`}
          alt={currentProject.title}
        />
      </div>
      <div className="project-container-details">
        <p>Featured Project</p>
        <p>{currentProject.title}</p>
        <p>{currentProject.desc}</p>
        <p>{currentProject.skills}</p>
        <div className="project-button-list">
          {currentProject.links.git && (
            <i
              class="devicon-github-original"
              onClick={() => window.open(currentProject.links.git, "_blank")}
            ></i>
          )}
          {currentProject.links.live && (
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/ffffff/link--v1.png"
              alt="link--v1"
              onClick={() => window.open(currentProject.links.live, "_blank")}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
