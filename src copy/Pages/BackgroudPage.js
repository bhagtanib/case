import React from "react";
import "../Styles/Background.css";
import profile from "../images/image.png";
import { motion } from "framer-motion";

const BackgroudPage = ({ aboutRef }) => {
  const skillsList = [
    "devicon-react-original",
    "devicon-mysql-original",
    "devicon-express-original",
    "devicon-vuejs-plain",
    "devicon-amazonwebservices-plain-wordmark",
    "devicon-azure-plain",
    "devicon-docker-plain",
    "devicon-kubernetes-plain",
    "devicon-nodejs-plain",
    "devicon-javascript-plain",
    "devicon-python-plain",
    "devicon-cplusplus-plain",
    "devicon-csharp-plain",
  ];
  return (
    <div className="black-background" id="about" ref={aboutRef}>
      <div className="black-background-header">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          viewport={{
            once: true,
          }}
        >
          <span style={{ fontWeight: 600 }}>01. </span>About Me
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{
            once: true,
          }}
          className="black-background-line"
        ></motion.span>
      </div>
      <div className="about-me-details">
        <div className="about-me-points">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.45 }}
            viewport={{
              once: true,
            }}
          >
            My journey towards software engineering began in high school, fueled
            by a desire to simplify the learning experience for myself and
            others. I started by tinkering with code, building a simple website
            platform for students to share study materials. This project ignited
            my curiosity and led me to pursue a degree in Computer Science.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{
              once: true,
            }}
          >
            I approach challenges with a proactive mindset, consistently pushing
            beyond boundaries to achieve personal and professional goals. Beyond
            mere buzzwords, I genuinely embody qualities like adaptability,
            project ownership, and collaboration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.75 }}
            viewport={{
              once: true,
            }}
          >
            Proficient in object-oriented programming languages such as
            JavaScript, Python, and C++, I specialize in developing full-stack
            web app solutions.
          </motion.p>
          
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.05 }}
          viewport={{
            once: true,
          }}
          src={profile}
          alt="#"
        />
      </div>
      <div className="skill-logos">
        {skillsList.map((s, index) => (
          <motion.i
            initial={{ opacity: 0, y: -5 }}
            viewport={{
              once: true,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.05 + 0.15 * index }}
            key={index}
            className={`${s}`}
          ></motion.i>
        ))}
      </div>
    </div>
  );
};

export default BackgroudPage;
