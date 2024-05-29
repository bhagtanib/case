import React, { useEffect, useRef, useState } from "react";
import "../Styles/Background.css";
import profile from "../images/image.png";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

const BackgroudPage = ({ heroRef }) => {
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
  const newAboutRef = useRef(null);
  const isInView = useInView(newAboutRef, {
    amount: "all",
  });

  useEffect(() => {
    console.log("changed");
    console.log(heroRef);
  }, [isInView]);

  const containerRef = useRef(null);

  return (
    <motion.div className="black-background" id="about">
      <motion.div className="about-me-details">
        <motion.div
          className="about-me-points"
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          <div className="black-background-header">
            <motion.p
              animate={{ opacity: isInView ? 1 : 1 }}
              transition={{ duration: 1 }}
              viewport={{
                once: true,
              }}
            >
              <span style={{ fontWeight: 600 }}>01. </span>About Me
            </motion.p>
            <motion.span
              animate={{ opacity: isInView ? 1 : 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{
                once: true,
              }}
              className="black-background-line"
            ></motion.span>
          </div>

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
            others.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{
              once: true,
            }}
          >
            I started by tinkering with code, building a simple website platform
            for students to share study materials. This project ignited my
            curiosity and led me to pursue a degree in Computer Science.
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
            I am proficient in object-oriented programming languages such as
            JavaScript, Python, and C++, I specialize in developing full-stack
            web app solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.05 }}
          viewport={{
            once: true,
          }}
          className="profile-image"
        >
          <motion.img
            src={profile}
            alt="#"
            ref={newAboutRef}
            id="profile-image"
          />
        </motion.div>

        <div className="skill-logos">
          <Marquee autoFill direction="up">
            {skillsList.map((s, index) => (
              <div style={{ margin: "20px 0" }}>
                <motion.i key={index} className={`${s}`}></motion.i>
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BackgroudPage;
