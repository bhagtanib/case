import { React, useRef } from "react";
import "../Styles/Hero.css";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence, animate } from "framer-motion";
import vid from "../main.mp4";
import { Button } from "@nextui-org/react";

const Hero = (aboutRef) => {
  return (
    <motion.div className="hero-container">
      <video
        src={vid}
        autoPlay="autoplay"
        loop="loop"
        muted
        className="video"
      ></video>
      <motion.div className="hero-split">
        <motion.div className="hero-left">
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            Hi, my name is
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.3, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            Bhavesh Bhagtani
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            I build things{" "}
            <span style={{ transform: "rotate(90deg)" }}>for the web</span>{" "}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 3 }}
            viewport={{
              once: true,
            }}
          >
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences.{" "}
          </motion.p>

          <motion.img
            className="img-button"
            width="64"
            height="64"
            src="https://img.icons8.com/glyph-neue/64/circled-chevron-down.png"
            alt="circled-chevron-down"
            color="primary"
            variant="bordered"
            initial={{ opacity: 0, x: -3 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.3, duration: 3 }}
            viewport={{
              once: true,
            }}
            onClick={() => {
              // if (aboutRef.current) {
                aboutRef.aboutRef.current.scrollIntoView({
                  behavior: 'smooth'
                });
              // }
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
