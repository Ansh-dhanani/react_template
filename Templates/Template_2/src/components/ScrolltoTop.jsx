import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          title="Go to top"
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full text-xl shadow-lg bg-[var(--color-primary)] text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "var(--color-secondary)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            ⮝
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;