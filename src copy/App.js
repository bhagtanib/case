import { useEffect, useRef, useState } from "react";
import "./App.css";
import BackgroudPage from "./Pages/BackgroudPage";
import Empty from "./Pages/Empty";
import Experience from "./Pages/Experience";
import Hero from "./Pages/Hero";
import { helix } from "ldrs";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./components/Project";
import Projects from "./Pages/Projects";

function App() {

  const aboutRef = useRef()

  const Loader = () => (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: .5 }}
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

  const [contentClass, setContentClass] = useState("fade-in");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader and show app
    }, 1500); // Wait for 2.5 seconds
  }, []);

  return (
    <div>
      <Loader />
      {!isLoading && (
        <AnimatePresence>
          <motion.div
            className={`App `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5, delay: 0.5 }}
          >
            <Hero aboutRef = {aboutRef} />
            <BackgroudPage aboutRef = {aboutRef} />
            <Experience />
            <Projects />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
