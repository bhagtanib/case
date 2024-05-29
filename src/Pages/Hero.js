import { React, useRef, useState, forwardRef } from "react";
import "../Styles/Hero.css";
import { motion, AnimatePresence, animate, useAnimation } from "framer-motion";
import vid from "../prev.mp4";
import { Button, link } from "@nextui-org/react";
import resume from "../data/Bhavesh Bhagtani Resume.pdf";

const Hero = ({ heroRef, handleScroll }) => {
  const videoRef = useRef(null);
  const controls = useAnimation();

  const navData = [
    {
      heading: "About",
      idRef: "about",
    },
    {
      heading: "Projects",
      data: [
        { title: "Comfort Cart", link: "https://comfortcart.web.app/" },
        { title: "Pelicule", link: "https://pelicula1.netlify.app/" },
        {
          title: "House Worth",
          link: "https://github.com/Mradul9756/House-Worth-Web-App",
        },
        { title: "Space Wars", link: "https://github.com/bhagtanib/Space-War" },
        { title: "Code Now", link: "" },
      ],
    },
    {
      heading: "Certifications",
      data: [
        {
          title: "Specialization in JavaScript Programming",
          link: "/certificate/Specialization in JavaScript Programming.pdf",
        },
        { title: "Introduction to HTML, CSS, & JavaScript", link: "/certificate/Introduction to HTML, CSS, & JavaScript.pdf" },
        { title: "Introduction to Software Engineering", link: "/certificate/Introduction to Software Engineering.pdf" },
        { title: "JavaScript Programming Essentials", link: "/certificate/JavaScript Programming Essentials.pdf" },
        { title: "Developing Back-End Apps with Node.js and Express", link: "/certificate/Developing Back-End Apps with Node.js and Express.pdf" },
        { title: "Developing Frontend with React", link: "certificate/Developing Frontend with React.pdf" },
        { title: "Getting Started with Git and GitHub", link: "/certificate/Getting Started with Git and GitHub.pdf" },

        
      ],
    },
    {
      heading: "Work Experience",
      idRef: "experience",
    },
    {
      heading: "Contact",
      data: [
        {
          title: "b.bhagtani10@gmail.com",
          link: "mailto:b.bhagtani10@gmail.com",
        },
        {
          title: "509-202-8540",
          link: "https://www.linkedin.com/in/bhavesh-bhagtani/",
        },
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/bhavesh-bhagtani/",
        },
      ],
    },
    {
      heading: "Social",
      data: [
        {
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/bhavesh-bhagtani/",
        },
        {
          title: "YouTube",
          link: "https://www.linkedin.com/in/bhavesh-bhagtani/",
        },
        {
          title: "GitHub",
          link: "https://github.com/bhagtanib",
        },
      ],
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div className="hero-container" ref={heroRef}>
      {/* <motion.video
        ref={videoRef}
        src={vid}
        autoPlay
        style={{ cursor: "pointer" }}
        loop
        muted
        className="video"
        onMouseMove={handleMouseMove}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.video> */}
      <div className="hero-nav-container">
        <div className="hero-nav-container-left">LOGO</div>
        <div className="hero-nav-container-mid">
          <div className="hero-nav-headers-container">
            {navData.map((item, index) => (
              <div
                key={index}
                className={
                  item.data ? "hero-nav-header-data" : "hero-nav-header-nodata"
                }
                onClick={() => {
                  if (!item.data) {
                    console.log(item.idRef);
                    handleScroll(item.idRef);
                  }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.heading}
                {item.data && (
                  <motion.div
                    className="hero-nav-header-data-item-container"
                    initial={{ y: -10, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: hoveredIndex === index ? "flex" : "none",
                    }}
                  >
                    {item.data.map((link, linkIndex) => (
                      <span
                        key={linkIndex}
                        className="hero-nav-header-data-item"
                        onClick={() => {
                          if (link.link.length > 0) {
                            window.open(link.link, "_blank");
                          } else {
                            window.open("https://google.com");
                          }
                        }}
                      >
                        {link.title}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className="hero-nav-container-right"
          onClick={() => window.open(resume, "_blank")}
        >
          <img
            src="https://img.icons8.com/windows/64/1cc79f/download--v1.png"
            alt="download--v1"
          />
          <span>Resume</span>
        </div>
      </div>

      <div className="hero-info-container">
        <motion.div className="hero-blocks">
          <motion.div
            className="hero-info-block-first"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            I am
          </motion.div>
          <motion.div
            className="hero-info-block-second"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            Bhavesh Bhagtani
          </motion.div>
          <motion.div
            className="hero-info-block-third"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
          >
            <span>A Full Stack Developer</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
