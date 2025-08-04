import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { motion } from "motion/react";
import { useState } from "react";
import Navbar from "./components/Nav2.jsx";
//import { HoverFollowProvider,HoverFollowTrigger,HoverFollowButton } from "./components/Hover.jsx";
import NoiseEffect from "./components/Noise.jsx"; // Adjust the import path as necessary
import CustomCursor from "./components/CustomCursor.jsx";
function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };
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

  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

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
      {/* Custom Cursor Component */}
      <CustomCursor />
      <Navbar />



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
