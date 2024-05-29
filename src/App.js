import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import BackgroudPage from "./Pages/BackgroudPage";
import Empty from "./Pages/Empty";
import Experience from "./Pages/Experience";
import Hero from "./Pages/Hero";
import { helix } from "ldrs";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Project from "./components/Project";
import Projects from "./Pages/Projects";

function App() {
  const Loader = () => (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="loader"
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "0",
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
      }}
    >
      <l-helix size="65" speed="3" color="black"></l-helix>
    </motion.div>
  );
  helix.register();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader and show app
    }, 1500); // Wait for 2.5 seconds
  }, []);

  // Horizontal scroll
  const { scrollY } = useScroll();
  const x = useTransform(
    scrollY,
    [0, window.innerHeight],
    [0, -window.innerWidth]
  );

  const heroRef = useRef(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    console.log(id, " element: ", element)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {isLoading? <Loader /> : <AnimatePresence>
        <motion.div className="App">
          <div className="AppContent">
            <motion.div
              style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                x: x, // Move horizontally based on scroll
                translateX: "-50%", // Center horizontally
                translateY: "-50%", // Center vertically
              }}
            >
              <Hero handleScroll={handleScroll} heroRef={heroRef} />
            </motion.div>
            <div className="app-empty-div"></div>
            <BackgroudPage heroRef={heroRef} />
            <Experience />
            <Projects />
          </div>
        </motion.div>
      </AnimatePresence>}
    </div>
  );
}

export default App;
