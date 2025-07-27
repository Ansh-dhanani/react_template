import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { motion } from "motion/react";
import Navbar from "./components/Nav1";
//import { HoverFollowProvider,HoverFollowTrigger,HoverFollowButton } from "./components/Hover.jsx";
import NoiseEffect from "./components/Noise.jsx"; // Adjust the import path as necessary
import CustomCursor from "./components/CustomCursor.jsx";
function App() {
  /*
"font-apple-garamond"
"font-merapro"
"font-boone"
"font-default-lingo"    
"font-minecraft"
"font-montblanc"
"font-palmore"
"font-tan-kulture"
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

  return (
    <>
      {/* Custom Cursor Component */}
      <CustomCursor/> 
      {/*for Hero section with blur and on load word by word animation*/}
      {/* <h1 className="relative z-10 mx-auto max-w-4xl text-center text-[230px] font-apple-light tracking-tighter text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Welcome to this React Template"
            .split(" ")
            .map((word, index) => (
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
        </h1> */}
      {/*hero section end*/}
      {/*for hero section with blur and on load word by word animation*/}


      {/* <HoverFollowProvider className="min-h-screen bg-gray-100">
        <HoverFollowButton
          offset={{ x: -70, y:-20 }}
          className="bg-blue-500 text-white"
        >
          View Project 🡥
        </HoverFollowButton>

        <HoverFollowTrigger as="button" className="p-10 align-middle content-center bg-red-500 rounded">
          I'm a button trigger
        </HoverFollowTrigger>
      </HoverFollowProvider> */}
    <Navbar/>
        <NoiseEffect />
    </>
  );
}

export default App;
