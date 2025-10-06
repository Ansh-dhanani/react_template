import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { motion } from "motion/react";
import { useState, useEffect } from "react"; // Added useEffect import
import Navbar from "./components/Nav1";
import NoiseEffect from "./components/Noise.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update DOM class
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Store theme preference in localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Initialize Lenis with useEffect
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Cleanup function
    return () => {
      // Add any cleanup needed for Lenis
    };
  }, []);

  const images = [
    {
      src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F2.png&w=640&q=75",
      alt: "Image 1",
    },
    {
      src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F1.png&w=640&q=75",
      alt: "Image 2",
    },
    {
      src: "https://skiper-ui.com/_next/image?url=%2Fcard%2F2.png&w=1080&q=75",
      alt: "Image 3",
    },
  ];
  const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} /> {/* Added props */}

      {/*for Hero section with blur and on load word by word animation*/}
      <h1 className="relative font-apple z-0 mx-auto max-w-4xl text-center pt-20 text-[20px] tracking-tighter text-[var(--color-text)] md:text-4xl lg:text-7xl">
        {"Welcome to this React Template".split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="mr-[30px] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>
      {/*hero section end*/}

      {/* <NoiseEffect /> */}
    </div>
  );
}

export default App;