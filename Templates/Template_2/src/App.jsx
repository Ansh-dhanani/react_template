import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Navbar from "./components/Nav2.jsx";
import NoiseEffect from "./components/Noise.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ScrollToTopButton from "./components/ScrolltoTop.jsx"; 

function App() {
  const [isDark, setIsDark] = useState(false);
  /*
"font-apple-garamond"
"font-merapro"
"font-boone"
"font-default-lingo"    
"font-minecraft"
"font-montblanc"
"font-palmore"
"font-tan-kulture"
"font-gridular"
"font-telegraf"
*/

  // for colour variables use the following format:
  /**
bg-[var(--color-bg)]
text-[var(--color-text)]
border-[var(--color-border)]
hover:bg-[var(--color-secondary)]
bg-[var(--color-primary)]
*/

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

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <section id="home" className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-montblanc font-bold text-[var(--color-text)] mb-4">Home Section</h2>
          <p className="text-lg md:text-xl text-[var(--color-text)] opacity-70 max-w-2xl mx-auto">
            This is the home section. The navbar will automatically highlight "Home" when you're in this area.
          </p>
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
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-[var(--color-primary)]">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-montblanc font-bold text-[var(--color-contrast)] mb-4">About Section</h2>
          <p className="text-lg md:text-xl text-[var(--color-contrast)] opacity-70 max-w-2xl mx-auto">
            This is the about section. The navbar will automatically highlight "About" when you scroll here.
          </p>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center bg-[var(--color-secondary)]">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-montblanc font-bold text-[var(--color-text)] mb-4">Services Section</h2>
          <p className="text-lg md:text-xl text-[var(--color-text)] opacity-70 max-w-2xl mx-auto">
            This is the services section. The navbar will automatically highlight "Services" when you're here.
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-montblanc font-bold text-[var(--color-text)] mb-4">Contact Section</h2>
          <p className="text-lg md:text-xl text-[var(--color-text)] opacity-70 max-w-2xl mx-auto">
            This is the contact section. The navbar will automatically highlight "Contact" when you scroll here.
          </p>
        </div>
      </section>
      
      <ScrollToTopButton />
    </div>
  );
}

export default App;