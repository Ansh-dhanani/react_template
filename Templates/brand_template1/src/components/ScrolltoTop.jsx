import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrollY > 300
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
   <button
  onClick={scrollToTop}
  title="Go to top"
  style={{ backgroundColor: "var(--color-secondary)" }}
  className="fixed bottom-8 right-8 z-50 hover:brightness-110 text-white p-3 rounded-full text-xl shadow-lg transition-transform transform hover:scale-110"
>
  ⮝
</button>
  );
};

export default ScrollToTopButton;
